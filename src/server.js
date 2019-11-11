import url from 'url';
import express from 'express';
import cache from 'memory-cache';
import cacheControl from 'express-cache-controller';
import cors from 'cors';

import languages from './languages.json';
import { fetchRepositories, fetchDevelopers } from './fetch';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(
  cacheControl({
    maxAge: 60 * 10,
  })
);

app.get('/languages', (req, res) => {
  res.cacheControl = {
    maxAge: 60 * 60 * 24,
  };
  res.json(languages);
});

app.get('(/|/repositories)', async (req, res) => {
  try {
    const parsedUrl = url.parse(req.originalUrl);
    const queryString = parsedUrl.query;
    const params = {};
    if (queryString) {
      for (const param of queryString.split('&')) {
        const [key, value] = param.split('=');
        params[key] = value;
      }
    }

    const { language, since } = params;
    const cacheKey = `repositories::${language || 'nolang'}::${since ||
      'daily'}`;
    const cacheKeyPerm = `perm::${cacheKey}`;
    const cached = cache.get(cacheKey);
    const cachedPerm = cache.get(cacheKeyPerm);

    res.cacheControl = {
      maxAge: 120,
    };

    if (Boolean(cached) && cached.length > 0) {
      return res.json(cached);
    }
    const data = await fetchRepositories({ language, since });
    if (data && data.length > 0) {
      cache.put(cacheKey, data, 1000 * 3600); // Store for a hour
      cache.put(cacheKeyPerm, data);
      return res.json(data);
    } else {
      return res.json(cachedPerm || data);
    }
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

    res.cacheControl = {
      maxAge: 120,
    };

    if (Boolean(cached) && cached.length > 0) {
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

app.use((_, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
