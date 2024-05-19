import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { ThemeContext } from '../../context/ThemeContext';

const Navbar = () => {
  const {isdark,toggleTheme} = useContext(ThemeContext)
  return (
    <nav className={`flex justify-between h-12 items-center px-4 shadow-lg ${isdark ? 'dark': 'light'}`}>
      <div className="logo">
        <img src="/logo.png" alt="" className='h-9 w-full object-cover rounded-xl'/>
      </div>
       <section className='hidden md:flex items-center gap-5 font-semibold options'>
         <NavLink to="">Indian Handicarft</NavLink>
         <NavLink to="/products">allproducts</NavLink>
         <NavLink to="/order">orders</NavLink>
       </section>

       <section className='flex items-center gap-4'>
         <img src="https://up.yimg.com/ib/th?id=OIP.NJA5jwWyyUaNQTwf9FIpZwHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109" alt=""  className='h-9 rounded-full object-cover object-center'/>
         {isdark?<MdLightMode size="1.5rem" onClick={toggleTheme}className='cursor-pointer'/>:<MdDarkMode size="1.7rem" onClick={toggleTheme} className='cursor-pointer'/>}
         <NavLink to="/cart">
         <div className='relative'>
         <FaBagShopping size="1.5rem"/>
         <div className='h-3 w-3 bg-white rounded-full flex justify-center items-center absolute top-1 right-[-3px] text-sm p-2 font-semibold text-black'>0</div>
         </div>
         </NavLink>
         <GiHamburgerMenu size='1.5rem'/>
       </section>
    </nav>
  )
}

export default Navbar