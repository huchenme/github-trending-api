const express = require('express');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const cache = require('memory-cache');
const cors = require('cors');
const _ = require('lodash');

const app = express();
app.use(cors());

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
  return _.omitBy(object, _.isNil);
}

async function fetchAllLanguages() {
  const data = await fetch(`${GITHUB_URL}/trending/`);
  const getLang = href => getMatchString(href, /\/trending\/([^?\/]+)/i);
  const $ = cheerio.load(await data.text());
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
        name: $a.children('.select-menu-item-text').text(),
      };
    });
  return {
    popular: filterLanguages(popularLanguages),
    all: filterLanguages(allLanguages),
  };
}

async function fetchRepositories({ language = '', since = 'daily' }) {
  const data = await fetch(`${GITHUB_URL}/trending/${language}?since=${since}`);
  const $ = cheerio.load(await data.text());
  return $('.repo-list li')
    .get()
    .map(repo => {
      const $repo = $(repo);
      const title = $(repo)
        .find('h3')
        .text()
        .trim();
      const relativeUrl = $(repo)
        .find('h3')
        .find('a')
        .attr('href');
      const currentPeriodStarsString =
        $repo
          .find('.float-sm-right')
          .text()
          .trim() || '';

      return omitNil({
        author: title.split(' / ')[0],
        name: title.split(' / ')[1],
        url: `${GITHUB_URL}${relativeUrl}`,
        description:
          $repo
            .find('.py-1 p')
            .text()
            .trim() || '',
        language: $repo
          .find('[itemprop=programmingLanguage]')
          .text()
          .trim(),
        stars: parseInt(
          $repo
            .find(`[href="${relativeUrl}/stargazers"]`)
            .text()
            .replace(',', '') || 0,
          10
        ),
        forks: parseInt(
          $repo
            .find(`[href="${relativeUrl}/network"]`)
            .text()
            .replace(',', '') || 0,
          10
        ),
        currentPeriodStars: parseInt(
          currentPeriodStarsString.split(' ')[0].replace(',', '') || 0,
          10
        ),
      });
    });
}

async function fetchDevelopers({ language = '', since = 'daily' }) {
  const data = await fetch(
    `${GITHUB_URL}/trending/developers/${language}?since=${since}`
  );
  const $ = cheerio.load(await data.text());
  return $('.explore-content li')
    .get()
    .map(dev => {
      const $dev = $(dev);
      const relativeUrl = $dev.find('.f3 a').attr('href');
      const name = getMatchString(
        $dev
          .find('.f3 a span')
          .text()
          .trim(),
        /^\((.+)\)$/i
      );
      $dev.find('.f3 a span').remove();
      const username = $dev
        .find('.f3 a')
        .text()
        .trim();

      $repo = $dev.find('.repo-snipit');

      return omitNil({
        username,
        name,
        url: `${GITHUB_URL}${relativeUrl}`,
        avatar: $dev.find('img').attr('src'),
        repo: {
          name: $repo
            .find('.repo-snipit-name span.repo')
            .text()
            .trim(),
          description:
            $repo
              .find('.repo-snipit-description')
              .text()
              .trim() || '',
          url: `${GITHUB_URL}${$repo.attr('href')}`,
        },
      });
    });
}

app.get('/memsize', (req, res) => {
  res.send(`memsize=${cache.memsize()}`);
});

app.post('/memclear', (req, res) => {
  cache.clear();
  res.sendStatus(200);
});

app.get('/languages', async (req, res) => {
  const cached = cache.get('languages');
  if (cached !== null) {
    return res.json(cached);
  }
  const data = await fetchAllLanguages();
  cache.put('languages', data, 1000 * 3600 * 24); // Store for a day
  res.json(data);
});

app.get('/repositories', async (req, res) => {
  try {
    const { language, since } = req.query;
    const cacheKey = `repositories::${language || 'nolang'}::${since ||
      'daily'}`;
    const cached = cache.get(cacheKey);
    if (cached !== null) {
      return res.json(cached);
    }
    const data = await fetchRepositories({ language, since });
    cache.put(cacheKey, data, 1000 * 3600); // Store for a hour
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.toJSON());
  }
});

app.get('/developers', async (req, res) => {
  try {
    const { language, since } = req.query;
    const cacheKey = `developers::${language || 'nolang'}::${since || 'daily'}`;
    const cached = cache.get(cacheKey);
    if (cached !== null) {
      return res.json(cached);
    }
    const data = await fetchDevelopers({ language, since });
    cache.put(cacheKey, data, 1000 * 3600); // Store for a hour
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.toJSON());
  }
});

app.listen(8080, () => {
  console.log('Server started.');
});
