import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import React from "react";
import MovieList from "./MovieList"

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies)
return (
    <div>
        <MovieList title={"Now Playing Movies "} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Populer "} movies={movies.populerMovies}/>
        <MovieList title={"Up Coming Movies "} movies={movies.upcoming}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
    </div>
)
}

export default SecondaryContainer;