import Header from "./Header";
import { API_Options } from "../Utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../Utils/moviesSlice";

const Browse = () =>{

    const dispatch = useDispatch();

    const getPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options);
        const json = await data.json();
        console.log(json.results)
        dispatch(addnowPlayingMovies(json.results))
    }

    useEffect( () => {
        getPlayingMovies();
    },[])

    return (
        <div>
            <Header/>
            Browse
        </div>
    )
}

export default Browse;