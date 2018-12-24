import url from 'url';
import express from 'express';
import cache from 'memory-cache';
import cors from 'cors';

import { fetchAllLanguages, fetchRepositories, fetchDevelopers } from './fetch';

const app = express();
app.use(cors());

app.get('/languages', async (req, res) => {
  const cached = cache.get('languages');
  if (!Boolean(cached)) {
    return res.json(cached);
  }
  const data = await fetchAllLanguages();
  cache.put('languages', data, 1000 * 3600 * 24); // Store for a day
  res.json(data);
});

app.get('/repositories', async (req, res) => {
  try {
    const parsedUrl = url.parse(req.originalUrl);
    const queryString = parsedUrl.query;
    const params = {};
    if (queryString) {
      for (const param of queryString.split('&')) {
        // eslint-disable-next-line prefer-const
        let [key, value] = param.split('=');

        // Missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        value = value === undefined ? null : value;

        params[key] = value;
      }
    }

    const { language, since } = params;
    const cacheKey = `repositories::${language || 'nolang'}::${since ||
      'daily'}`;
    const cached = cache.get(cacheKey);
    if (!Boolean(cached) && cache.length > 0) {
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
    if (!Boolean(cached) && cache.length > 0) {
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

app.get('/memsize', (req, res) => {
  res.send(`memsize=${cache.memsize()}`);
});

app.post('/memclear', (req, res) => {
  cache.clear();
  res.sendStatus(200);
});

app.listen(8080, () => {
  console.log('Server started.');
});
