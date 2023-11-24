import Header from "./Header";
import useUpcoming from "../Hooks/useUpcoming";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopulerMovies from "../Hooks/usePopulerMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";

const Browse = () => {
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
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
