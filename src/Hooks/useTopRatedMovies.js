
import { useEffect } from "react";
import { API_Options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";

const useTopRatedMovies = () => {

    //Fetch Data from TMDB API and update store...
    const dispatch = useDispatch();
    
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_Options
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
