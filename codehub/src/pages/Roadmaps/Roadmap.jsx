import React from 'react'
import './Style.scss'
import { useNavigate } from 'react-router-dom'

const Roadmap = ({tech}) => {
  const navigate=useNavigate()
  return (
    <div className='roadmap'>
        <p>{tech}</p>
        <button onClick={()=> navigate(`/carrer/${tech}`)}>View Roadmap</button>
    </div>
  )
}

export default Roadmap