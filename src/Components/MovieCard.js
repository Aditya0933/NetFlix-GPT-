import { IMG_CDN_POSTER } from "../Utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-[200px] h-full ">
      <img alt="Movie Poster"  src={IMG_CDN_POSTER + posterPath} />
    </div>
  );
};

export default MovieCard;
