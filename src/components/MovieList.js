import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies , wrap}) => {
    //console.log(movies);
  return ( movies &&
  <div className="px-6">
    <div className=" text-lg md:font-bold py-4 text-white">
        <h1>{title}</h1>
    </div>
    <div className="flex md:overflow-x-scroll flex-col">
      
      <div 
      className={wrap ? "flex flex-wrap justify-center" : "flex"}
      // className="flex"
      >
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
</div>
  );
};

export default MovieList;
