import React, { useContext, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { CartContext } from '../context/Cartcontext';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [slidenav, setslidenav] = useState(false)
  const { loginWithRedirect, logout, isAuthenticated,user} = useAuth0();

  const {cart} =useContext(CartContext)
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
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        {isAuthenticated? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>:<button onClick={() => loginWithRedirect()}>Log In</button>}
        <div className="carticon">
          <NavLink to='/cart'><FaCartShopping size="1.5rem"/></NavLink>
          <div className="circle">{cart.length}</div>
        </div>
        {isAuthenticated && <img src={user.picture}/>}
      </div>
    </nav>
     <div className="slidenav" ref={navref}>
         <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        {isAuthenticated && <p>welcome,{user.name}</p>}
        {isAuthenticated? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>:<button onClick={() => loginWithRedirect()}>Log In</button>}
        <div className="carticon">
          <NavLink to='/cart'><FaCartShopping size="1.5rem"/></NavLink>
          <div className="circle">0</div>
        </div>
     </div>
    </>
  )
}

export default Navbar