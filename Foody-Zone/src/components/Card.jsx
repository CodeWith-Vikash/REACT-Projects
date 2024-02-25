import React from 'react'
import Buttons from './Buttons'

const Card = ({name,price,image,text}) => {
  return (
    <div className='card'>
        <img src={image}/>
        <div className="card-content">
            <b>{name}</b>
            <p>{text}</p>
            <Buttons text={price} p="$"/>
        </div>
    </div>
  )
}

export default Card