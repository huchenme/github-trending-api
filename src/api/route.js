const url = require('url');
const cache = require('memory-cache');
const cacheControl = require('express-cache-controller');
const cors = require('cors');
const { Router } = require('express');

const languages = require('../languages.json');
const spokenLanguages = require('../spoken-languages.json');

const { fetchRepositories, fetchDevelopers } = require('./fetch');

const router = Router();

router.use(cors());
router.use(
  cacheControl({
    maxAge: 600,
    sMaxAge: 600,
  })
);

router.get('/languages', (req, res) => {
  res.cacheControl = {
    maxAge: 60 * 60 * 24,
    sMaxAge: 60 * 60 * 24 * 7,
  };
  res.json(languages);
});

router.get('/spoken_languages', (req, res) => {
  res.cacheControl = {
    maxAge: 60 * 60 * 24,
    sMaxAge: 60 * 60 * 24 * 7,
  };
  res.json(spokenLanguages);
});

router.get('(/|/repositories)', async (req, res) => {
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

    const { language, since, spoken_language_code: spokenLanguage } = params;
    const cacheKey = `repositories::${language || 'nolang'}::${
      since || 'daily'
    }::${spokenLanguage || 'nolang'}}`;
    const cacheKeyPerm = `perm::${cacheKey}`;
    const cached = cache.get(cacheKey);
    const cachedPerm = cache.get(cacheKeyPerm);

    res.cacheControl = {
      maxAge: 300,
      sMaxAge: 600,
    };

    if (Boolean(cached) && cached.length > 0) {
      return res.json(cached);
    }
    const data = await fetchRepositories({ language, since, spokenLanguage });
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

router.get('/developers', async (req, res) => {
  try {
    const { language, since } = req.query;
    const cacheKey = `developers::${language || 'nolang'}::${since || 'daily'}`;
    const cacheKeyPerm = `perm::${cacheKey}`;
    const cached = cache.get(cacheKey);
    const cachedPerm = cache.get(cacheKeyPerm);

    res.cacheControl = {
      maxAge: 300,
      sMaxAge: 600,
    };

    if (Boolean(cached) && cached.length > 0) {
      return res.json(cached);
    }
    const data = await fetchDevelopers({ language, since });
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

router.get('/memsize', (req, res) => {
  res.send(`memsize=${cache.memsize()}`);
});

router.post('/memclear', (req, res) => {
  cache.clear();
  res.sendStatus(200);
});

router.use((_, res) => {
  res.sendStatus(404);
});

module.exports = router;
