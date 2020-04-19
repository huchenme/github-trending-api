import fetch from 'node-fetch';
import { fetchRepositories, fetchDevelopers } from '../fetch';
import mockRepositories from '../mockData/repositories';
import mockDevelopers from '../mockData/developers';

jest.mock('node-fetch');

describe('fetchRepositories()', () => {
  fetch.mockReturnValueOnce({
    text: jest.fn().mockReturnValue(mockRepositories),
  });

  it('should match snapshot', async () => {
    await expect(fetchRepositories()).resolves.toMatchSnapshot();
  });
});

describe('fetchDevelopers()', () => {
  fetch.mockReturnValueOnce({
    text: jest.fn().mockReturnValue(mockDevelopers),
  });

  it('should match snapshot', async () => {
    await expect(fetchDevelopers()).resolves.toMatchSnapshot();
  });
});
