import fetch from 'node-fetch';

const SERVER_URL = 'https://github-trending-api.now.sh';

function buildUrl(baseUrl, params = {}) {
  const queryString = Object.keys(params)
    .map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    })
    .join('&');

  return queryString === '' ? baseUrl : `${baseUrl}?${queryString}`;
}

export async function fetchAllLanguages() {
  const data = await fetch(`${SERVER_URL}/languages`);
  return data.json();
}

export async function fetchRepositories(params) {
  const data = await fetch(buildUrl(`${SERVER_URL}/repositories`, params));
  return data.json();
}

export async function fetchDevelopers(params) {
  const data = await fetch(buildUrl(`${SERVER_URL}/developers`, params));
  return data.json();
}
