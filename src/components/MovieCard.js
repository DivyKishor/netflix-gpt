import React from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const MovieCard = (movie) => {
  const dispatch = useDispatch();
  //console.log(movie);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.movie.id}}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    // Multiple trailers
    const trailers = json.results.filter((video) => video.type === "Trailer");
    const trailer = trailers.length
      ? trailers.filter((video) => video.name === "Official Trailer")
      : json.results[0]
      ? json.results[0]
      : null;
    console.log(trailer);
    if (trailer) dispatch(addTrailerVideo(trailer[0]));
  };
  const handleCardClick = () => {
    console.log("movie card clicked");
    //console.log(movie.movie);

    getMovieVideo();
  };
  const { original_title, overview, poster_path } = movie.movie;
  if(!poster_path) return null;
  return (
    <div className="w-40 pr-4 py-2 text-white" onClick={handleCardClick}>
      <img alt={original_title} src={IMG_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
