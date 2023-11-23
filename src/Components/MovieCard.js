import { IMG_CDN_POSTER } from "../Utils/constant";

const MovieCard = ({posterPath}) => {
    return <div>
        <img alt="Movie Poster" src={IMG_CDN_POSTER + posterPath}/>
    </div>
}

export default MovieCard;