import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstant";
import { useRef } from "react";
import openai from "../Utils/openAI";
import { API_Options } from "../Utils/constant";
import { json } from "react-router-dom";
import {addGptMovieResult} from '../Utils/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const SearchTextGPT = useRef(null);

  const dispatch = useDispatch();

  //Search Movie in TMDB...
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    return json.results;
  };

  const GPTSearchHandler = async () => {
    console.log(SearchTextGPT.current.value);
    // Make a API Call to GPT API and get Movies Result...

    const QueryGPT =
      "Act as a Movie Recommendation system and suggest some movies for the Query : " +
      SearchTextGPT.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result:Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: QueryGPT }],
      model: "gpt-3.5-turbo",
    });

    // This Console Shows Searched Movies using OpenAI API but MY API limit has exceed so I hard code the data...as MoviesGPT
    console.log("GPT Movies Search Result- " + gptResults.choices);
    const MoviesGPT = gptResults.choices?.[0]?.message?.content.split(",");

    //This is my Hard Coded Data-
    // const MoviesGPT = [
    //   "Andaz Apna Apna",
    //   "Hera Pheri",
    //   "Chupke Chupke",
    //   "Jaane Bhi Do Yaar",
    //   "Padosan",
    // ];

    console.log("Movies GPT Array...Start");
    const promiseArray = MoviesGPT.map((movie) => searchMovieTMDB(movie));
    console.log("Movies GPT Array...End");

    const tmdbResult = await Promise.all(promiseArray);
    console.log(tmdbResult);

    dispatch(
      addGptMovieResult({ movieName: MoviesGPT, movieResult: tmdbResult })
      // addGptMovieResult(tmdbResult)
    );
  };
  return (
    <div className="pt-[30%] sm:pt-[10%] flex justify-center  sm:p-4">
      <form
        className="w-4/4 sm-w-3/4 md:w-2/3 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={SearchTextGPT}
          type="text"
          className="p-2 sm:p-4 m-3 text-sm sm:m-4 col-span-10 sm:col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-2 sm:col-span-3 m-1 sm:m-4 p-1 sm:p-2 text-sm bg-red-700 text-white rounded-lg"
          onClick={GPTSearchHandler}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
