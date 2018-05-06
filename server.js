const express = require('express');
const cache = require('memory-cache');
const cors = require('cors');
const { fetchAllLanguages, fetchRepositories, fetchDevelopers } = require('./fetch');

const HOUR = 1000 * 60 * 60;
const DEFAULT_PARAMS = {
  language: '',
  since: 'daily'
};

const app = express();
app.use(cors());

function applyParams(params) {
  return Object.assign({}, DEFAULT_PARAMS, params);
}

function getCacheKey(path, params) {
  return `${path}:${Object.keys(params)
    .map(paramName => params[paramName])
    .join(':')}`;
}

function cachingGet(app, { path, cacheTtl = HOUR, fetcher }) {
  app.get(path, async (req, res) => {
    try {
      const params = applyParams(req.query);

      const cacheKey = getCacheKey(path, params);
      const cached = cache.get(cacheKey);
      if (cached !== null) {
        return res.send(cached);
      }

      const fetchedData = await fetcher(params);
      const resBody = JSON.stringify(fetchedData);

      cache.put(cacheKey, resBody, cacheTtl);
      res.send(resBody);

    } catch (err) {
      console.error(err);
      res.status(500).send(err.toJSON());
    }
  });
}

app.get('/memsize', (req, res) => {
  res.send(`memsize=${cache.memsize()}`);
});

app.post('/memclear', (req, res) => {
  cache.clear();
  res.sendStatus(200);
});

cachingGet(app, {
  path: '/languages',
  cacheTtl: HOUR * 24,
  fetcher: fetchAllLanguages
});

cachingGet(app, {
  path: '/repositories',
  fetcher: fetchRepositories
});

cachingGet(app, {
  path: '/developers',
  fetcher: fetchDevelopers
});

module.exports = app;
