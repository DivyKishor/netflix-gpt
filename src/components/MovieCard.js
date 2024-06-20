import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = (movie) => {
    console.log(movie);
    const { original_title, overview, poster_path } = movie.movie
  return (
    <div className="w-40 pr-4">
      <img alt={original_title} 
        src={IMG_CDN_URL + poster_path} />
    </div>
  )
}

export default MovieCard
