import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-4xl px-8 md:px-16 py-3 md:py-6  bg-black text-white ">{title}</h1>
      <div className="overflow-x-scroll scrollbar-hide bg-black">
        <div className="w-fit">
          <div className="flex px-4 md:px-8 py-2 ">
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
