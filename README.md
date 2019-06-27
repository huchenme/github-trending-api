<h1 align="center">Github Unofficial Trending API</h1>

<p align="center">:octocat: A simple API that returns number of Github trending repositories and developers.</p>

<div align="center">
  <img src="images/hero.svg" alt="hero image" width="400"/>
  <br>
  <p>
    <em>Credits: Illustration by <a href="https://undraw.co/">unDraw</a></em>
  </p>
</div>

<br />

[![GitHub closed issues](https://img.shields.io/github/issues-closed/huchenme/github-trending-api.svg)](https://github.com/huchenme/github-trending-api/issues)
[![Travis](https://img.shields.io/travis/huchenme/github-trending-api.svg)](https://travis-ci.org/huchenme/github-trending-api)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![coverage](https://img.shields.io/codecov/c/github/huchenme/github-trending-api.svg)](https://codecov.io/github/huchenme/github-trending-api)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/huchenme/github-trending-api/blob/master/LICENSE)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg)](CODE_OF_CONDUCT.md)

[![npm (scoped)](https://img.shields.io/npm/v/@huchenme/github-trending.svg)](https://www.npmjs.com/package/@huchenme/github-trending)
[![module formats: cjs, es](https://img.shields.io/badge/module%20formats-cjs%2C%20esm-green.svg)](https://unpkg.com/@huchenme/github-trending/dist/) [![Greenkeeper badge](https://badges.greenkeeper.io/huchenme/github-trending-api.svg)](https://greenkeeper.io/)

---

## Table of Contents

<details>

<summary><b>Expand Table of Contents</b></summary>

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Projects using github-trending-api](#projects-using-github-trending-api)
- [API Status](#api-status)
- [REST API](#rest-api)
- [Tutorial](#tutorial)
  - [Trending Repositories](#trending-repositories)
  - [Trending Developers](#trending-developers)
  - [List Languages](#list-languages)
- [NPM Package](#npm-package)
  - [Install](#install)
  - [Usage](#usage)
  - [API](#api)
    - [languages](#languages)
    - [fetchRepositories(params)](#fetchrepositoriesparams)
    - [fetchDevelopers(params)](#fetchdevelopersparams)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

</details>

## Projects using github-trending-api

- **[Hacker Tab](https://github.com/huchenme/hacker-tab-extension)** ([Chrome Store](https://chrome.google.com/webstore/detail/hacker-tab/ibomigipadcieapbemkegkmadbbanbgm)): Chrome extension to view GitHub trending projects on new tab.
- **[github-trending-plus](https://github.com/zircleUI/github-trending-plus)** ([Live](https://github-trending-plus.surge.sh/)): ✨ Experimental Github trending UI.
- **[HitUp](https://github.com/wonderbeyond/HitUP)** ([Chrome Store](https://chrome.google.com/webstore/detail/hitup/eiokaohkigpbonodjcbjpecbnccijkjb)) ([Website](https://hitup.wondertools.top/)): Help you find top things, including GitHub Trending Repositories.
- **[Gitter](https://github.com/huangjianke/Gitter)**: Gitter for GitHub - 可能是目前颜值最高的 GitHub 小程序客户端.
- **[flutter_wanandroid](https://github.com/Sky24n/flutter_wanandroid)**:
  Flutter 完整项目，WanAndroid 客户端，BLoC、RxDart 、国际化、主题色、启动页、引导页，拥有较好的项目结构&比较规范的代码！
- **[vsc-github-trending](https://github.com/4gray/vsc-github-trending)**: ([VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=4gray.vsc-github-trending#overview)): Explore Github Trending repositories directly from Visual Studio Code
- **[GiTiny](https://github.com/k-lpmg/GiTiny)**([AppStore](https://itunes.apple.com/app/tiny-github/id1461424565)): iOS app for GitHub with exploring trending.
- **[SwiftHub](https://github.com/khoren93/SwiftHub)**: GitHub iOS client written in RxSwift and MVVM clean architecture.
- **[GitNews](https://git.news)**: Trending repositories from GitHub, HackerNews & Reddit (Mobile & Desktop).
- **[mini-github](https://github.com/kezhenxu94/mini-github)**: GitHub WeChat Mini Program (可能是全网功能最全的 GitHub 微信小程序).

## API Status

API status is available at [uptimerobot](https://stats.uptimerobot.com/K6yKjcKlM).

## REST API

See the full API documentation in [Apiary](https://githubtrendingapi.docs.apiary.io/#).

## Tutorial

[How to scrape any website and build an API using cheerio.js](https://medium.com/@chen/how-to-scrape-any-website-and-build-an-api-using-cheerio-js-6a3f0c651d2e?source=friends_link&sk=7b76d9abf0b6c572042238906e281228)

### Trending Repositories

Receive an array of trending repositories.

**URL Endpoint:**

https://github-trending-api.now.sh/repositories?language=javascript&since=weekly

**Parameters:**

- `language`: **optional**, list trending repositories of certain programming languages, possible values are listed [here](languages.json).
- `since`: **optional**, default to `daily`, possible values: `daily`, `weekly` and `monthly`.

**Response:**

```json
[
  ...
  {
    "author": "google",
    "name": "gvisor",
    "avatar": "https://github.com/google.png",
    "url": "https://github.com/google/gvisor",
    "description": "Container Runtime Sandbox",
    "language": "Go",
    "languageColor": "#3572A5",
    "stars": 3320,
    "forks": 118,
    "currentPeriodStars": 1624,
    "builtBy": [
      {
        "href": "https://github.com/viatsko",
        "avatar": "https://avatars0.githubusercontent.com/u/376065",
        "username": "viatsko"
      }
    ]
  }
  ...
]
```

> Note that [GitHub trending page](http://github.com/trending) sometimes is empty, in that case this API returns `[]` in response, your application should be able to handle it or read from previous cache.

### Trending Developers

Receive an array of trending developers.

**URL Endpoint:**

https://github-trending-api.now.sh/developers?language=javascript&since=weekly

**Parameters:**

- `language`: **optional**, list trending repositories of certain programming languages, possible values are listed [here](languages.json).
- `since`: **optional**, default to `daily`, possible values: `daily`, `weekly` and `monthly`.

**Response:**

```json
[
  {
    "username": "google",
    "name": "Google",
    "type": "organization",
    "url": "https://github.com/google",
    "avatar": "https://avatars0.githubusercontent.com/u/1342004",
    "repo": {
      "name": "traceur-compiler",
      "description": "Traceur is a JavaScript.next-to-JavaScript-of-today compiler",
      "url": "https://github.com/google/traceur-compiler"
    }
  }
]
```

> `type` could be `organization` or `user`.

### List Languages

Receive popular languages and all languages.

**URL Endpoint:**

https://github-trending-api.now.sh/languages

**Response:**

```json
[
  {
    "id": "1c-enterprise",
    "name": "1C Enterprise"
  },
  {
    "id": "abap",
    "name": "ABAP"
  },
  {
    "id": "abnf",
    "name": "ABNF"
  },
  {
    "id": "actionscript",
    "name": "ActionScript"
  }
]
```

## NPM Package

You could also use the API as a NPM package.

### Install

```sh
$ npm install --save @huchenme/github-trending
```

### Usage

```js
import {
  languages,
  fetchRepositories,
  fetchDevelopers,
} from '@huchenme/github-trending';

fetchRepositories({ language: 'ruby', since: 'monthly' }).then(repositories => {
  console.log(repositories);
});

fetchDevelopers({ language: 'javascript' }).then(developers => {
  console.log(developers);
});

console.log(languages);
```

### API

#### languages

List all languages

```js
[
  {
    id: '1c-enterprise',
    name: '1C Enterprise',
  },
  {
    id: 'abap',
    name: 'ABAP',
  },
  {
    id: 'abnf',
    name: 'ABNF',
  },
  {
    id: 'actionscript',
    name: 'ActionScript',
  },
];
```

#### fetchRepositories(params)

Receive an array of trending repositories.

**params**:

- `language`: possible values are the the ones from `fetchAllLanguages()` or [just find here](./src/languages.ts).
- `since`: `daily`, `weekly` or `monthly`, default to `daily`.

```js
[
  ...
  {
    author: 'google',
    name: 'gvisor',
    avatar: 'https://github.com/google.png',
    url: 'https://github.com/google/gvisor',
    description: 'Container Runtime Sandbox',
    language: 'Go',
    languageColor: '#3572A5',
    stars: 3320,
    forks: 118,
    currentPeriodStars: 1624,
    "builtBy": [
      {
        "href": "https://github.com/viatsko",
        "avatar": "https://avatars0.githubusercontent.com/u/376065",
        "username": "viatsko"
      }
    ]
  }
  ...
]
```

#### fetchDevelopers(params)

Receive an array of trending developers.

**params**:

- `language`: possible values are the the ones from `fetchAllLanguages()` or [just find here](languages.json).
- `since`: `daily`, `weekly` or `monthly`, default to `daily`.

```js
[
  ...
  {
    username: 'google',
    name: 'Google',
    type: 'organization',
    url: 'https://github.com/google',
    avatar: 'https://avatars0.githubusercontent.com/u/1342004',
    repo: {
      name: 'traceur-compiler',
      description:
        'Traceur is a JavaScript.next-to-JavaScript-of-today compiler',
      url: 'https://github.com/google/traceur-compiler'
    }
  }
  ...
]
```

## License

MIT
