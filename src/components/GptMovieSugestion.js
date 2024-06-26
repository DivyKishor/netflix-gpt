import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const GptMovieSugestion = () => {
    //console.log(movies)
    const gpt = useSelector((store) => store.gpt)
    const { movieResults } = gpt;

    if(movieResults === null) return;

  return (
    <div>
      <MovieList title="Results" movies={movieResults} wrap="true" />
    </div>
  )
}

export default GptMovieSugestion
