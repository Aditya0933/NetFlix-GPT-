import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-3xl px-6 bg-black text-white py-4">{title}</h1>
      <div className="bg-opacity-90 overflow-x-scroll scrollbar-hide">
        <div className="w-fit">
          <div className="flex ">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
