import axios from 'axios';
import { sample, sampleSize, snakeCase } from 'lodash';
import languages from './languages.json';
import spokenLanguages from './spoken-languages.json';

const SERVER_URL = 'https://github-trending-api.now.sh';

function buildUrl(baseUrl, params = {}) {
  const queryString = Object.keys(params)
    .filter((key) => params[key])
    .map((key) => `${snakeCase(key)}=${params[key]}`)
    .join('&');

  return queryString === '' ? baseUrl : `${baseUrl}?${queryString}`;
}

export async function fetchRepositories(params) {
  const res = await axios(buildUrl(`${SERVER_URL}/repositories`, params));
  if (res.status !== 200) {
    throw new Error('Something went wrong');
  }
  return res.data;
}

export async function fetchDevelopers(params) {
  const res = await axios(buildUrl(`${SERVER_URL}/developers`, params));
  if (res.status !== 200) {
    throw new Error('Something went wrong');
  }
  return res.data;
}

export async function fetchRandomRepository(params) {
  const res = await axios(buildUrl(`${SERVER_URL}/repositories`, params));
  if (res.status !== 200) {
    throw new Error('Something went wrong');
  }
  const json = res.data;
  return sample(json);
}

export async function fetchRandomRepositories(size = 1, params) {
  const res = await axios(buildUrl(`${SERVER_URL}/repositories`, params));
  if (res.status !== 200) {
    throw new Error('Something went wrong');
  }
  const json = res.data;
  return sampleSize(json, size);
}

export { languages, spokenLanguages };
