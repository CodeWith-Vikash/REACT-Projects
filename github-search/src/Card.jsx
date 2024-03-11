import React from 'react'

const Card = ({name,followers,img,bio,link}) => {
  return (
    <div className='card'>
        <img src={img}/>
        <div className="pro">
          <b>{name}</b>
          <b>Followers : {followers}</b>
        </div>
        <p>{bio}</p>
        <button className='visit'><a href={link}>Visit</a></button>
    </div>
  )
}

export default Card