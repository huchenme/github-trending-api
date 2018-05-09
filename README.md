# Github Unofficial Trending API

[![Travis](https://img.shields.io/travis/huchenme/github-trending-api.svg)](https://travis-ci.org/huchenme/github-trending-api)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sallar/github-contributions-canvas/blob/master/LICENSE)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](CODE_OF_CONDUCT.md)

![hero image](images/hero.jpeg)

:octocat: A simple API that returns number of Github trending repositories and developers.

## API Documentation

See the full API documentation in [Apiary](https://githubtrendingapi.docs.apiary.io/#).

## Trending Repositories

Receive an array of trending repositories.

**URL Endpoint:**

https://github-trending-api.now.sh/repositories?language=javascript&since=weekly

**Parameters:**

* `language`: **optional**, list trending repositories of certain programming languages, possible values are listed [here](languages.json).
* `since`: **optional**, default to `daily`, possible values: `daily`, `weekly` and `monthly`.

**Response:**

```json
[
  ...
  {
    "author": "google",
    "name": "gvisor",
    "url": "https://github.com/google/gvisor",
    "description": "Container Runtime Sandbox",
    "language": "Go",
    "stars": 3320,
    "forks": 118,
    "currentPeriodStars": 1624
  }
  ...
]
```

## Trending Developers

Receive an array of trending developers.

**URL Endpoint:**

https://github-trending-api.now.sh/developers?language=javascript&since=weekly

**Parameters:**

* `language`: **optional**, list trending repositories of certain programming languages, possible values are listed [here](languages.json).
* `since`: **optional**, default to `daily`, possible values: `daily`, `weekly` and `monthly`.

**Response:**

```json
[
  ...
  {
    "username": "google",
    "name": "Google",
    "url": "https://github.com/google",
    "avatar": "https://avatars0.githubusercontent.com/u/1342004?s=96&v=4",
    "repo": {
      "name": "traceur-compiler",
      "description":
        "Traceur is a JavaScript.next-to-JavaScript-of-today compiler",
      "url": "https://github.com/google/traceur-compiler"
    }
  }
  ...
]
```

## List Languages

Receive popular languages and all languages.

**URL Endpoint:**

https://github-trending-api.now.sh/languages

**Response:**

```json
{
  "popular": [
    ...
    {
      "urlParam": "html",
      "name": "HTML"
    }
    ...
  ],
  "all": [
    ...
    {
      "urlParam": "javascript",
      "name": "JavaScript"
    }
    ...
  ]
}
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/2078389?v=4" width="100px;"/><br /><sub><b>Hu Chen</b></sub>](https://huchen.me)<br />[💻](https://github.com/huchenme/github-trending-api/commits?author=huchenme "Code") [📖](https://github.com/huchenme/github-trending-api/commits?author=huchenme "Documentation") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT
