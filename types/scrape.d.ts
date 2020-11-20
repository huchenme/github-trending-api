import {
  FetchRepositoryOptions,
  Repository,
  FetchDevelopersOptions,
  Developer
} from './index'

export function fetchRepositories(
  params?: FetchRepositoryOptions
): Promise<Repository[]>

export function fetchDevelopers(
  params?: FetchDevelopersOptions
): Promise<Developer[]>
