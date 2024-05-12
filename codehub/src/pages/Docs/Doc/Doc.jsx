import React from 'react'
import './Style.scss'

const Doc = ({image,title,link}) => {
  return (
    <div className='doc'>
        <img src={image} alt="" className={title=='Express.js'||title=='MongoDB'?'pro':'img'}/>
        <p>{title}  Documentation</p>
        <a href={link} target='_blank'><button className='btn'>View docs</button></a>
    </div>
  )
}

export default Doc