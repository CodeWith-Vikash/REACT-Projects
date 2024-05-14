import React, { useRef, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './Style.scss'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md"
import { useDispatch,useSelector } from 'react-redux';
import {toggle} from '../../Redux/homeslice'
import logo from '../../../public/brandlogo.png'

const Navbar = () => {
  const { loginWithRedirect,logout ,isAuthenticated,user} = useAuth0();
  const [show, setshow] = useState(false)
  const dispatch=useDispatch()
  const {isdark}=useSelector((state)=>state.mainReducer.home)
  
  const togglemode=()=>{
      dispatch(toggle())
  }

  const navref=useRef(null)
  const navtoggle=()=>{
    if(show){
      navref.current.style.transform='translateX(-100%)'
    }else{
      navref.current.style.transform='translateX(0%)'
    }
    setshow(!show)
  }
  return (
    <>
          <nav className={isdark?'dark':'light'}>
      <NavLink to="/">
      <div className="logo">
        <img src={logo} alt="" />
        <h1>Techbro</h1>
      </div>
      </NavLink>
      <div className="content">
      <div className="options">
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/docs">Docs</NavLink>
        <NavLink to="/"></NavLink>
      {isAuthenticated && <div className="name">welcome,{user.name}</div>}
      {isAuthenticated?<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>:<button onClick={()=>{loginWithRedirect()}}>Login</button>}
      
      </div>
      {isdark?<MdLightMode className='icon' size="1.8rem" onClick={togglemode}/>:<MdDarkMode className='icon' size="2rem" onClick={togglemode}/>}
      <GiHamburgerMenu className='icon ham' size="1.5rem" color='var(--color)' onClick={navtoggle}/>
      {isAuthenticated && <img src={user.picture}/>}
      </div>
    </nav>
      <div className={`subnav ${isdark?'darknav':'lightnav'}`} ref={navref}>
      <div className="options">
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/docs">Docs</NavLink>
        <NavLink to="/"></NavLink>
        {isAuthenticated?<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>:<button onClick={()=>{loginWithRedirect()}}>Login</button>}
      </div>
      </div>
    </>
  )
}

export default Navbar