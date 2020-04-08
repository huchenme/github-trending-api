import cache from 'memory-cache';
import { fetchRepositories } from '../public/fetch';

module.exports = async (req, res) => {
  try {
    const { language, since, spoken_language_code: spokenLanguage } = req.query;
    const cacheKey = `repositories::${language || 'nolang'}::${
      since || 'daily'
    }::${spokenLanguage || 'nolang'}}`;
    const cacheKeyPerm = `perm::${cacheKey}`;
    const cached = cache.get(cacheKey);
    const cachedPerm = cache.get(cacheKeyPerm);

    res.setHeader(
      'Cache-Control',
      'max-age=300, s-maxage=600, stale-while-revalidate'
    );

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
};
