import fetch from 'node-fetch';
import { sample, sampleSize, snakeCase } from 'lodash';
import languages from './languages.json';
import spokenLanguages from './spoken-languages.json';

const SERVER_URL = 'https://github-trending-api.now.sh';

function buildUrl(baseUrl, params = {}) {
  const queryString = Object.keys(params)
    .filter(key => params[key])
    .map(key => `${snakeCase(key)}=${params[key]}`)
    .join('&');

  return queryString === '' ? baseUrl : `${baseUrl}?${queryString}`;
}

export async function fetchRepositories(params) {
  const res = await fetch(buildUrl(`${SERVER_URL}/repositories`, params));
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  return res.json();
}

export async function fetchDevelopers(params) {
  const res = await fetch(buildUrl(`${SERVER_URL}/developers`, params));
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  return res.json();
}

export async function fetchRandomRepository(params) {
  const res = await fetch(buildUrl(`${SERVER_URL}/repositories`, params));
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const json = res.json();
  return sample(json);
}

export async function fetchRandomRepositories(size = 1, params) {
  const res = await fetch(buildUrl(`${SERVER_URL}/repositories`, params));
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const json = res.json();
  return sampleSize(json, size);
}

export { languages, spokenLanguages };
