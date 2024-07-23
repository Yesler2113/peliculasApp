import { AxiosAdapter } from "./http/axios.adapter";

export const movieDbFetcher = new AxiosAdapter({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '0c4ca94e455090e916e0d1831662ec1f',
        language: 'en'
    },
});