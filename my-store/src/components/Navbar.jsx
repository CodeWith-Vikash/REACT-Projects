import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [slidenav, setslidenav] = useState(false)
  let navref=useRef()
  const toggleNav=()=>{
    if(slidenav){
      navref.current.style.transform="translate(0,-200%)"
    }else{
      navref.current.style.transform="translate(0,0%)"
    }
    setslidenav(!slidenav)
  }
  return (
    <>
      <nav>
      <div className="logo">Devshop</div>
      <GiHamburgerMenu size="2rem" style={{cursor:"pointer"}} onClick={toggleNav} className='ham'/>
      <div className="options">
        <NavLink to='/home'>Home</NavLink>
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
     <div className="slidenav" ref={navref}>
         <NavLink to='/home'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <p>welcome,vikash</p>
        <button>Login</button>
        <div className="carticon">
          <NavLink to='/cart'><FaCartShopping size="1.5rem"/></NavLink>
          <div className="circle">0</div>
        </div>
     </div>
    </>
  )
}

export default Navbar