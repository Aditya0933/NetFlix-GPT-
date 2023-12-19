import Header from "./Header";
import useUpcoming from "../Hooks/useUpcoming";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopulerMovies from "../Hooks/usePopulerMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  //This is my Custom Hook
  useNowPlayingMovies();
  useUpcoming();
  usePopulerMovies();
  useTopRatedMovies();

  return (
    <div>
      <div className="absolute w-full">
        <Header />
      </div>
      <div >
        {showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
