import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import React from "react";

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (!movies) return;
    const mainMovie = movies[0];
    // console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;
return (
    <div >
        {console.log("Main Container is Called...")}
        <VideoBackground movieId={id}/>
        <VideoTitle title={original_title} overview={overview}/>
    </div>
)
}

export default MainContainer;