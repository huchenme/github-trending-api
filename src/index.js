import fetch from 'node-fetch';
import { sample, sampleSize } from 'lodash';

const SERVER_URL = 'https://github-trending-api.now.sh';

function buildUrl(baseUrl, params = {}) {
  const queryString = Object.keys(params)
    .filter(key => params[key])
    .map(key => {
      return `${key}=${params[key]}`;
    })
    .join('&');

  return queryString === '' ? baseUrl : `${baseUrl}?${queryString}`;
}

export async function fetchAllLanguages() {
  const res = await fetch(`${SERVER_URL}/languages`);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Something went wrong');
  }
}

export async function fetchRepositories(params) {
  const res = await fetch(buildUrl(`${SERVER_URL}/repositories`, params));
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Something went wrong');
  }
}

export async function fetchDevelopers(params) {
  const res = await fetch(buildUrl(`${SERVER_URL}/developers`, params));
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Something went wrong');
  }
}

export async function fetchRandomRepository(params) {
  const res = await fetch(buildUrl(`${SERVER_URL}/repositories`, params));
  if (res.ok) {
    const json = res.json();
    return sample(json);
  } else {
    throw new Error('Something went wrong');
  }
}

export async function fetchRandomRepositories(size = 1, params) {
  const res = await fetch(buildUrl(`${SERVER_URL}/repositories`, params));
  if (res.ok) {
    const json = res.json();
    return sampleSize(json, size);
  } else {
    throw new Error('Something went wrong');
  }
}
