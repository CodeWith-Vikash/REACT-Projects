import React from 'react'
import { NavLink } from 'react-router-dom'
import { FcGraduationCap } from "react-icons/fc";

const Nav = () => {
  return (
    <nav className='flex justify-between h-[10vh] bg-blue-500 items-center px-6 text-white sticky top-0'>
        <h1 className='flex items-center text-xl'><FcGraduationCap size="2rem"/>Employer</h1>
        <div className='flex gap-6 font-semibold'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profiles</NavLink>
        </div>
    </nav>
  )
}

export default Nav