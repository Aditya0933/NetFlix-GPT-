import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestion = () => {
  const { movieResult, movieName } = useSelector((store) => store.gpt);
  console.log(movieResult + movieName)
  if (!movieName) return null;
  return (
    <div className="m-4 p-4">
      <div>
        {movieName.map((movieName,index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
