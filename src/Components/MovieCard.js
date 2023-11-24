import { IMG_CDN_POSTER } from "../Utils/constant";

const MovieCard = ({posterPath}) => {
    return <div className="w-[500px]">
        <img alt="Movie Poster" src={IMG_CDN_POSTER + posterPath}/>
    </div>
}

export default MovieCard;