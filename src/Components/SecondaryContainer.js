import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import React from "react";
import MovieList from "./MovieList"

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies)
    console.log("Secondary Container Movie - " + movies)
return (
    <div className="">
        <MovieList title={"Now Playing Movies "} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending "} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Populer "} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Best Action "} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Comedy"} movies={movies.nowPlayingMovies}/>
    </div>
)
}

export default SecondaryContainer;