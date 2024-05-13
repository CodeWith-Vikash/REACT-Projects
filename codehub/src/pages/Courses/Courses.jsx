import React from 'react'
import './Style.scss'
import Course from '../../components/Course/Course'
import { useSelector } from 'react-redux'

const Courses = () => {
  const {isdark}=useSelector((state)=>state.mainReducer.home)
  return (
    <div className={`courses ${isdark?'dark':'light'}`}>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
    </div>
  )
}

export default Courses