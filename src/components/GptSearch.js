import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSugestion from './GptMovieSugestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
          <img alt="background" src={BG_URL} />
      </div>
      <GptSearchBar />
      <GptMovieSugestion />
      {/* GPT search bar
          GPT Movie sugestions */}
    </div>
  )
}

export default GptSearch
