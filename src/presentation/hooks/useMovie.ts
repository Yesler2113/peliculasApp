import { useEffect, useState } from "react";
import { Movie } from "../../core/entities/movie.entity";
import * as UseCases from  '../../core/use-cases';
import { movieDbFetcher } from "../../config/adapters/movieDB.adapter";

export const useMovie = () => {
    const [nowPlaying, setNowPlaying] = useState<Movie[]>();
    const [popular, setPopular] = useState<Movie[]>();
    const [topRated, setTopRated] = useState<Movie[]>();
    const [upcoming, setUpcoming] = useState<Movie[]>();
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async () => {
        const nowPlayingPromise = UseCases.moviesNowPlayingCase(movieDbFetcher);
        const popularPromise = UseCases.PopularMoviesUseCase(movieDbFetcher);
        const topRatedPromise = UseCases.TopRatedMoviesUseCase(movieDbFetcher);
        const upcomingPromise = UseCases.upcomingMoviesUseCase(movieDbFetcher);

        const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise]);

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);  
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

    };



    return {
        //properties
        nowPlaying,
        popular,
        topRated,
        upcoming,
        isloading,
        
        //methods

        setIsLoading,
    };
};