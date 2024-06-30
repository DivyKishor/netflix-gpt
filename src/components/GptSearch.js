import React,{ useState } from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSugestion from './GptMovieSugestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  const [movies, setMovies] = useState(null);
  const onSearch = (data) => {
    setMovies(data);
  }
  return (
    <div>
      <div className='fixed -z-10'>
          <img class="h-screen" alt="background" src={BG_URL} />
          {/* <div className='absolute w-full h-full bg-black'></div> */}
      </div>
      <GptSearchBar onSearch={(data)=>onSearch(data)}/>
      <GptMovieSugestion/>
      {/* GPT search bar
          GPT Movie sugestions */}
    </div>
  )
}

export default GptSearch
