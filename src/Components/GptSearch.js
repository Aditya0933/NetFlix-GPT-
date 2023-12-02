import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"
import{BG_URL} from "../Utils/constant"

const GptSearch = () => {

    return(<div className="overflow-none">
        {/* Background IMG of Netflix... */}
      <div className="absolute -z-10 ">
        <img
          className="bg-cover bg-center max-w-[100%]"
          src={BG_URL}
          alt="WebSite-Background"
          />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>)

}

export default GptSearch;