import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useDispatch, useSelector } from 'react-redux'

const MainContainer = () => {
    
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(movies === null) return;

    const mainMovie = movies[0];
    //console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;
  return (
    <div className=' bg-black md:pt-0'>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
