import React from 'react'
import Homebanner from './Homebanner'
import Categories from './Categories'
import Popular from './Popular'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Homebanner/>
      <Categories/>
      <Popular/>
    </div>
  )
}

export default Home