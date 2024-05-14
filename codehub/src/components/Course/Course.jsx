import React from 'react'
import './Style.scss'
import dummyimg from '../../7wnove7K-ZQ-HD.jpg'

const Course = ({title,desc,img}) => {
  return (
    <div className='course'>
       <img src={img} alt="noimg" />
       <div className="content">
       <p className="title">
        {title}
       </p>
       <p className="subtitle">
       {desc}
       </p>
       <button>Start Watching</button>
       </div>
    </div>
  )
}

export default Course