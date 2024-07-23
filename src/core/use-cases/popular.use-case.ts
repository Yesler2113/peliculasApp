import { HttpAdapter } from "../../config/adapters/http/http.adapter";
import { MovieDbResponse } from "../../infrastructure/interfaces/movie-db.response";
import { MovieMapper } from "../../infrastructure/mappers/movie.mapper";
import { Movie } from "../entities/movie.entity";

export const PopularMoviesUseCase = async (fetcher: HttpAdapter) :Promise<Movie[]> => {
    try {
        const Popular = await fetcher.get<MovieDbResponse>('/popular', {});

        return Popular.results.map((result => MovieMapper.fromMovieDBResultToEntity(result)));

    } catch (error) {
        console.error(error);
        throw new Error('Error fetching movies popular');
    }
};