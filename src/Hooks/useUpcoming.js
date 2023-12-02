
import { useEffect } from "react";
import { API_Options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../Utils/moviesSlice";

const useUpcoming = () => {

    //Fetch Data from TMDB API and update store...
    const dispatch = useDispatch();
    
    const getUpcoming = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_Options
      );
      const json = await data.json();
      dispatch(addUpcoming(json.results));
    };

  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcoming;

