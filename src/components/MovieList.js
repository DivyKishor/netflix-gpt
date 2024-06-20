import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    console.log(movies);
  return ( movies &&
  <div className="px-6">
    <div className="font-bold py-4 text-white">
        <h1>{title}</h1>
    </div>
    <div className="flex overflow-x-scroll">
      
      <div className="flex">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
</div>
  );
};

export default MovieList;
