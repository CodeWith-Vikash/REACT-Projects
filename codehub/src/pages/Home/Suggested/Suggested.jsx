import React from 'react'
import './Style.scss'
import Course from '../../../components/Course/Course'

const Suggested = () => {
  return (
    <div className='suggested'>
        <h3>Recommended Courses</h3>
        <div className="courses">
            <Course/>
            <Course/>
            <Course/>
        </div>
    </div>
  )
}

export default Suggested