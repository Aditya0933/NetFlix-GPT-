
import { useEffect } from "react";
import { API_Options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addPopulerMovies, addUpcoming } from "../Utils/moviesSlice";

const usePopulerMovies = () => {

    //Fetch Data from TMDB API and update store...
    const dispatch = useDispatch();
    
    const getPopulerMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_Options
      );
      const json = await data.json();
      dispatch(addPopulerMovies(json.results));
    };

  useEffect(() => {
    getPopulerMovies();
  }, []);
};

export default usePopulerMovies;
