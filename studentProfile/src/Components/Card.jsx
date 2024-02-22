import React from 'react'

const Card = ({name,rollno,image}) => {
  return ( 
    <div className='shadow-2xl'>
        <img src={image} className='w-[200px]'/>
        <div className="content p-2">
        <b>Name: {name}</b>
        <br />
        <b>Rollno: {rollno}</b>
        <p>Univercity: MIT USA</p>
        </div>
    </div>
  )
}

export default Card