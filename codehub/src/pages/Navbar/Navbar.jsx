import React, { useRef, useState } from 'react'
import './Style.scss'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md"
import { useDispatch,useSelector } from 'react-redux';
import {toggle} from '../../Redux/homeslice'

const Navbar = () => {
  const [login, setlogin] = useState(false)
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
      <div className="logo">
        <b>&lt; / &gt;</b>
        <NavLink to="/"><h1>codewithvikash</h1></NavLink>
      </div>
      <div className="content">
      <div className="options">
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/docs">Docs</NavLink>
        <NavLink to="/"></NavLink>
      {login?<button>Logout</button>:<button>Login</button>}
      </div>
      {isdark?<MdLightMode className='icon' size="1.8rem" onClick={togglemode}/>:<MdDarkMode className='icon' size="2rem" onClick={togglemode}/>}
      <GiHamburgerMenu className='icon ham' size="1.5rem" color='var(--color)' onClick={navtoggle}/>
      </div>
    </nav>
      <div className="subnav" ref={navref}>
      <div className="options">
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/docs">Docs</NavLink>
        <NavLink to="/"></NavLink>
      {login?<button>Logout</button>:<button>Login</button>}
      </div>
      </div>
    </>
  )
}

export default Navbar