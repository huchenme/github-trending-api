import cheerio from 'cheerio';
import fetch from 'node-fetch';
import { omitBy, isNil } from 'lodash';

const GITHUB_URL = 'https://github.com';

function getMatchString(value, pattern) {
  const match = value.match(pattern);
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

function filterLanguages(languages) {
  return languages.filter(lang => lang.urlParam && lang.urlParam !== 'unknown');
}

function omitNil(object) {
  return omitBy(object, isNil);
}

function removeDefaultAvatarSize(src?: string): string {
  /* istanbul ignore if */
  if (!src) {
    return src;
  }
  return src.replace(/\?s=.*$/, '');
}

export async function fetchAllLanguages(): Promise<any> {
  const data = await fetch(`${GITHUB_URL}/trending/`);
  const $ = cheerio.load(await data.text());
  const getLang = href => getMatchString(href, /\/trending\/([^?/]+)/i);
  const popularLanguages = $('.col-md-3 .filter-item')
    .get()
    .map(a => {
      const $a = $(a);
      return {
        urlParam: getLang($a.attr('href')),
        name: $a.text(),
      };
    });
  const allLanguages = $('.col-md-3 .select-menu-item')
    .get()
    .map(a => {
      const $a = $(a);
      return {
        urlParam: getLang($a.attr('href')),
        name: $a.children('[data-menu-button-text]').text(),
      };
    });
  return {
    popular: filterLanguages(popularLanguages),
    all: filterLanguages(allLanguages),
  };
}

export async function fetchRepositories({
  language = '',
  since = 'daily',
} = {}): Promise<any> {
  const url = `${GITHUB_URL}/trending/${language}?since=${since}`;
  const data = await fetch(url);
  const $ = cheerio.load(await data.text());
  return (
    $('.Box article.Box-row')
      .get()
      // eslint-disable-next-line complexity
      .map((repo): any => {
        const $repo = $(repo);
        const title = $repo
          .find('.h3')
          .text()
          .trim();
        const relativeUrl = $repo
          .find('.h3')
          .find('a')
          .attr('href');
        const currentPeriodStarsString =
          $repo
            .find('.float-sm-right')
            .text()
            .trim() || /* istanbul ignore next */ '';

        const builtBy = $repo
          .find('span:contains("Built by")')
          .find('[data-hovercard-type="user"]')
          .map((i, user): any => {
            const altString = $(user)
              .children('img')
              .attr('alt');
            const avatarUrl = $(user)
              .children('img')
              .attr('src');
            return {
              username: altString
                ? altString.slice(1)
                : /* istanbul ignore next */ null,
              href: `${GITHUB_URL}${user.attribs.href}`,
              avatar: removeDefaultAvatarSize(avatarUrl),
            };
          })
          .get();

        const colorNode = $repo.find('.repo-language-color');
        const langColor = colorNode.length
          ? colorNode.css('background-color')
          : null;

        const langNode = $repo.find('[itemprop=programmingLanguage]');

        const lang = langNode.length
          ? langNode.text().trim()
          : /* istanbul ignore next */ null;

        return omitNil({
          author: title.split(' / ')[0],
          name: title.split(' / ')[1],
          url: `${GITHUB_URL}${relativeUrl}`,
          description:
            $repo
              .find('p.my-1')
              .text()
              .trim() || /* istanbul ignore next */ '',
          language: lang,
          languageColor: langColor,
          stars: parseInt(
            $repo
              .find(`[href="${relativeUrl}/stargazers"]`)
              .text()
              .replace(',', '') || /* istanbul ignore next */ '0',
            10
          ),
          forks: parseInt(
            $repo
              .find(`[href="${relativeUrl}/network/members"]`)
              .text()
              .replace(',', '') || /* istanbul ignore next */ '0',
            10
          ),
          currentPeriodStars: parseInt(
            currentPeriodStarsString.split(' ')[0].replace(',', '') ||
              /* istanbul ignore next */ '0',
            10
          ),
          builtBy,
        });
      })
  );
}

export async function fetchDevelopers({
  language = '',
  since = 'daily',
} = {}): Promise<any> {
  const data = await fetch(
    `${GITHUB_URL}/trending/developers/${language}?since=${since}`
  );
  const $ = cheerio.load(await data.text());
  return $('.Box article.Box-row')
    .get()
    .map((dev): any => {
      const $dev = $(dev);
      const relativeUrl = $dev.find('.h3 a').attr('href');
      const name = getMatchString(
        $dev
          .find('.h3 a')
          .text()
          .trim(),
        /^\((.+)\)$/i
      );

      const username = relativeUrl.slice(1);

      const type = $dev
        .find('img')
        .parent()
        .attr('data-hovercard-type');

      const $repo = $dev.find('.mb-2');

      $repo.find('svg').remove();

      return omitNil({
        username,
        name,
        type,
        url: `${GITHUB_URL}${relativeUrl}`,
        avatar: removeDefaultAvatarSize($dev.find('img').attr('src')),
        repo: {
          name: $repo
            .find('a')
            .text()
            .trim(),
          description:
            $repo
              .find('.f6')
              .text()
              .trim() || /* istanbul ignore next */ '',
          url: `${GITHUB_URL}${$repo.find('a').attr('href')}`,
        },
      });
    });
}
