import React from 'react'
import './Style.scss'
import dummyimg from '../../7wnove7K-ZQ-HD.jpg'

const Course = () => {
  return (
    <div className='course'>
       <img src={dummyimg} alt="noimg" />
       <div className="content">
       <p className="title">
        The Ultimate Python Course
       </p>
       <p className="subtitle">
       Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!
       </p>
       <button>Start Watching</button>
       </div>
    </div>
  )
}

export default Course