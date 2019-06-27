import fetch from 'node-fetch';
import { sample, sampleSize } from 'lodash';

const SERVER_URL = 'https://github-trending-api.now.sh';

function buildUrl(baseUrl, params = {}): string {
  const queryString = Object.keys(params)
    .filter((key): string | undefined => params[key])
    .map((key): string => `${key}=${params[key]}`)
    .join('&');

  return queryString === '' ? baseUrl : `${baseUrl}?${queryString}`;
}

export async function fetchRepositories(params): Promise<any> {
  const res = await fetch(buildUrl(`${SERVER_URL}/repositories`, params));
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  return res.json();
}

export async function fetchDevelopers(params): Promise<any> {
  const res = await fetch(buildUrl(`${SERVER_URL}/developers`, params));
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  return res.json();
}

export async function fetchRandomRepository(params): Promise<any> {
  const res = await fetch(buildUrl(`${SERVER_URL}/repositories`, params));
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const json = res.json();
  return sample(json);
}

export async function fetchRandomRepositories(
  size: number = 1,
  params
): Promise<any> {
  const res = await fetch(buildUrl(`${SERVER_URL}/repositories`, params));
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const json = res.json();
  return sampleSize(json, size);
}

export { default as languages } from './languages';
