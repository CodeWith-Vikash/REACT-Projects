import React from 'react'
import './Style.scss'
import errorimg from '../../assets/error.png'

const Errorpage = () => {
  return (
    <div className='error'>
       <img src={errorimg} alt="" />
    </div>
  )
}

export default Errorpage