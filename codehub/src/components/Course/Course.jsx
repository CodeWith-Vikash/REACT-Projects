import React from 'react'
import './Style.scss'
import { useNavigate } from 'react-router-dom'

const Course = ({title,desc,img,id}) => {
  const navigate=useNavigate()
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
       <button onClick={()=> navigate(`/video/${id}`)}>Start Watching</button>
       </div>
    </div>
  )
}

export default Course