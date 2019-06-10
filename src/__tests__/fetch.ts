import fetch from 'node-fetch';
import mockRepositories from '../mockData/repositories';
import mockDevelopers from '../mockData/developers';
import {
  fetchAllLanguages,
  fetchRepositories,
  fetchDevelopers,
} from '../fetch';

jest.mock('node-fetch');

const mockedFetch = (fetch as unknown) as jest.Mock;

describe('fetchAllLanguages()', () => {
  mockedFetch.mockReturnValueOnce({
    text: jest.fn().mockReturnValue(mockRepositories),
  });

  it('should match snapshot', async () => {
    await expect(fetchAllLanguages()).resolves.toMatchSnapshot();
  });
});

describe('fetchRepositories()', () => {
  mockedFetch.mockReturnValueOnce({
    text: jest.fn().mockReturnValue(mockRepositories),
  });

  it('should match snapshot', async () => {
    await expect(fetchRepositories()).resolves.toMatchSnapshot();
  });
});

describe('fetchDevelopers()', () => {
  mockedFetch.mockReturnValueOnce({
    text: jest.fn().mockReturnValue(mockDevelopers),
  });

  it('should match snapshot', async () => {
    await expect(fetchDevelopers()).resolves.toMatchSnapshot();
  });
});
