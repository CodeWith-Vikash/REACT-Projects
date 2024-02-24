import React from 'react'
import Buttons from './Buttons'

const Card = ({image,text,price}) => {
  return (
    <div className='card'>
        <img src={image}/>
        <div className="card-content">
            <b>{text}</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ea similique commodi voluptatem odit iste eum voluptatum nam nemo nihil</p>
            <Buttons text={price}/>
        </div>
    </div>
  )
}

export default Card