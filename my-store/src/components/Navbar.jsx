import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Devshop</div>
      <div className="options">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <p>welcome,vikash</p>
        <button>Login</button>
        <div className="carticon">
          <NavLink to='/cart'><FaCartShopping size="1.5rem"/></NavLink>
          <div className="circle">0</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar