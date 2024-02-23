import React from 'react'
import Button from './button'

const Header = () => {
  return (
    <nav className='header flex justify-between px-4 py-2  items-center'>
        <img src="src\images\brand_logo.png"/>
        <ul className='options flex gap-3'>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <Button data="Login"/>
    </nav>
  )
}

export default Header