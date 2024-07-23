import { HttpAdapter } from "../../config/adapters/http/http.adapter";
import { MovieDbResponse } from "../../infrastructure/interfaces/movie-db.response";
import { MovieMapper } from "../../infrastructure/mappers/movie.mapper";
import { Movie } from "../entities/movie.entity";

export const TopRatedMoviesUseCase = async (fetcher: HttpAdapter) :Promise<Movie[]> => {
    try {
        const topRatedMovies = await fetcher.get<MovieDbResponse>('/top_rated', {});

        return topRatedMovies.results.map((result => MovieMapper.fromMovieDBResultToEntity(result)));

    } catch (error) {
        console.error(error);
        throw new Error('Error fetching movies top rated');
    }
};