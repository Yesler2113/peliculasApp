import { HttpAdapter } from "../../config/adapters/http/http.adapter";
import { MovieDbResponse } from "../../infrastructure/interfaces/movie-db.response";
import { MovieMapper } from "../../infrastructure/mappers/movie.mapper";
import { Movie } from "../entities/movie.entity";

interface Options {
    page?: number;
    limit?: number;
}

export const PopularMoviesUseCase = async (fetcher: HttpAdapter, options?: Options) :Promise<Movie[]> => {
    try {
        const Popular = await fetcher.get<MovieDbResponse>('/popular', {
            page: options?.page ?? 1,
        });

        return Popular.results.map((result => MovieMapper.fromMovieDBResultToEntity(result)));

    } catch (error) {
        console.error(error);
        throw new Error('Error fetching movies popular');
    }
};