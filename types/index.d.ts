declare module '@huchenme/github-trending' {
    export interface FetchRepositoryOptions {
        language: string;
        since: string;
        spokenLanguage: string;
    }

    export interface FetchDevelopersOptions {
        language: string;
        since: string;
    }

    export interface BuiltBy {
        username: string;
        href: string;
        avatar: string;
    }

    export interface Repository {
        author: string;
        name: string;
        avatar: string;
        url: string;
        description: string;
        language: string;
        languageColor: string;
        stars: number;
        forks: number;
        currentPeriodStars: number;
        builtBy: BuiltBy[];
    }

    export interface DeveloperRepo {
        name: string;
        description: string;
        url: string;
    }

    export interface Developer {
        username: string;
        name: string;
        type: string;
        url: string;
        sponsorUrl: string;
        avatar: string;
        repo: DeveloperRepo | null
    }

    export interface Language {
        urlParam: string;
        name: string;
    }

    export interface SpokenLanguage {
        urlParam: string;
        name: string;
    }

    export function fetchRepositories(
        params: FetchRepositoryOptions, serverUrl?: string
    ): Promise<Repository[]>
    
    export function fetchDevelopers(
        params: FetchDevelopersOptions, serverUrl?: string
    ): Promise<Developer[]>

    export function fetchRandomRepository(
        params: FetchRepositoryOptions, serverUrl?: string
    ): Promise<Respository>

    export function fetchRandomRepositories(
        size?: number, params: FetchRepositoryOptions, serverUrl?: string
    ): Promise<Repository[]>

    export function scrapeRepositories(
        params?: FetchRepositoryOptions
    ): Promise<Repository[]>

    export function scrapeDevelopers(
        params?: FetchDevelopersOptions
    ): Promise<Developer[]>

    export const languages: Language[];
    export const spokenLanguages: SpokenLanguage[];
}