import { HttpAdapter } from "../../config/adapters/http/http.adapter";
import { MovieDbResponse } from "../../infrastructure/interfaces/movie-db.response";
import { MovieMapper } from "../../infrastructure/mappers/movie.mapper";
import { Movie } from "../entities/movie.entity";

export const moviesNowPlayingCase = async (fetcher: HttpAdapter) :Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<MovieDbResponse>('/now_playing', {});

        return nowPlaying.results.map((result => MovieMapper.fromMovieDBResultToEntity(result)));

    } catch (error) {
        console.error(error);
        throw new Error('Error fetching movies now playing');
    }
};