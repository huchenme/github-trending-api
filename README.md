# Github Contributions API

A simple API that returns number of Github contributions based on a users Github profile. This API is used for generating an image of user contributions [in this site](https://github-contributions.now.sh/)

## Usage

Send a request to the API in the following format:

```
https://github-contributions-api.now.sh/v1/GITHUB_USERNAME
```

and you will receive an object with history of that user's contributions:

```json
{
  ...
  "contributions": [
    {
      "date": "2018-04-30",
      "count": 2,
      "color": "#c6e48b"
    },
    {
      "date": "2018-04-29",
      "count": 29,
      "color": "#239a3b"
    },
    ...
  ]
}
```

## License

MIT © [Sallar Kaboli](LICENSE)
