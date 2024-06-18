import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";


const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        //console.log(json);
        // Multiple trailers
        const trailers = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailers.length
          ? trailers.filter((video) => video.name === "Official Trailer")
          : json.results[0];
        //setTrailerId(trailer[0].key);
        dispatch(addTrailerVideo(trailer[0]));
      };
    
      useEffect(() => {
        getMovieVideo();
      }, []);

}

export default useMovieTrailer;