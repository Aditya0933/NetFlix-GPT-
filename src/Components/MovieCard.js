import { IMG_CDN_POSTER } from "../Utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className=" w-[100px] sm:w-[150px] md:w-[200px]  h-full mr-3 md:mr-6 hover:scale-110 duration-300">
      <img alt="Movie Poster"  src={IMG_CDN_POSTER + posterPath} />
    </div>
  );
};

export default MovieCard;
