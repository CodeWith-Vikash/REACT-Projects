import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div className='error'>
        <b>404</b>
        <span>OH! YOU ARE LOST.</span>
        <p>The page you are looking for does'nt exist.how you got here is a mystery,but you can click on the button below to go to homepage.</p>
        <NavLink to="/"><button>Homepage</button></NavLink>
    </div>
  )
}

export default Errorpage