import { HttpAdapter } from "../../config/adapters/http/http.adapter";
import { MovieDbResponse } from "../../infrastructure/interfaces/movie-db.response";
import { MovieMapper } from "../../infrastructure/mappers/movie.mapper";
import { Movie } from "../entities/movie.entity";

interface Options {
    page?: number;
    limit?: number;
}


export const upcomingMoviesUseCase = async (fetcher: HttpAdapter, options?:  Options) :Promise<Movie[]> => {
    try {
        const upcomingMovies = await fetcher.get<MovieDbResponse>('/upcoming', {});

        return upcomingMovies.results.map((result => MovieMapper.fromMovieDBResultToEntity(result)));

    } catch (error) {
        console.error(error);
        throw new Error('Error fetching movies upcoming');
    }
};