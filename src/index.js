import axios from 'axios';
import { sample, sampleSize, snakeCase } from 'lodash';
import languages from './languages.json';
import spokenLanguages from './spoken-languages.json';
import * as scrapingFunctions from './functions/utils/fetch';

const SERVER_URL = 'https://ghapi.huchen.dev';

function buildUrl(baseUrl, params = {}) {
  const queryString = Object.keys(params)
    .filter((key) => params[key])
    .map((key) => `${snakeCase(key)}=${params[key]}`)
    .join('&');

  return queryString === '' ? baseUrl : `${baseUrl}?${queryString}`;
}

function checkResponse(res) {
  if (res.status !== 200) {
    throw new Error('Something went wrong');
  }
}

export async function fetchRepositories(params, serverUrl = SERVER_URL) {
  const res = await axios(buildUrl(`${serverUrl}/repositories`, params));
  checkResponse(res);

  return res.data;
}

export async function fetchDevelopers(params, serverUrl = SERVER_URL) {
  const res = await axios(buildUrl(`${serverUrl}/developers`, params));
  checkResponse(res);

  return res.data;
}

export async function fetchRandomRepository(params, serverUrl = SERVER_URL) {
  const res = await axios(buildUrl(`${serverUrl}/repositories`, params));
  checkResponse(res);

  const json = res.data;
  return sample(json);
}

export async function fetchRandomRepositories(
  size = 1,
  params,
  serverUrl = SERVER_URL
) {
  const res = await axios(buildUrl(`${serverUrl}/repositories`, params));
  checkResponse(res);

  const json = res.data;
  return sampleSize(json, size);
}

export const scrapeDevelopers = scrapingFunctions.fetchDevelopers;
export const scrapeRepositories = scrapingFunctions.fetchRepositories;

export { languages, spokenLanguages };
