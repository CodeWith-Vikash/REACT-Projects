import React from 'react'
import Hero from './heroBanner/Hero'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import Toprated from './top-rated/Toprated'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Trending/>
      <Popular/>
      <Toprated/>
    </div>
  )
}

export default Home