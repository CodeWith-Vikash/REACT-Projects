import React from 'react'
import Hero from './Hero/Hero'
import Suggested from './Suggested/Suggested'
import { useSelector } from 'react-redux'

const Home = () => {
  const {isdark}=useSelector((state)=>state.mainReducer.home)
  return (
    <div className={` ${isdark?'dark':'light'}`}>
      <Hero/>
      <Suggested/>
    </div>
  )
}

export default Home