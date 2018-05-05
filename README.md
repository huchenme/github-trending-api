# Github Unofficial Trending API

A simple API that returns number of Github trending repositories and developers.

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

## License

MIT © [Hu Chen](LICENSE)
