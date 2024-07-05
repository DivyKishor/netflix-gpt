import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)

    if(movies === null) return;
  return (
    <div className=' bg-black'>
      {/*
        Movie List - popular
        ..
        . 
            Movie Cards      
        */}
        <div className='md:-mt-48 relative z-20 px-12'>
            {movies.nowPlayingMovies &&<MovieList title="Now Playing" movies={movies.nowPlayingMovies} />}
            {/* {movies.popularMovies &&<MovieList title="Popular" movies={movies.popularMovies} />} */}
            {movies.topRatedMovies &&<MovieList title="Top Rated" movies={movies.topRatedMovies} />}
            {movies.upcomingMovies &&<MovieList title="Upcoming" movies={movies.upcomingMovies} />}
        </div>
    </div>
  )
}

export default SecondaryContainer
