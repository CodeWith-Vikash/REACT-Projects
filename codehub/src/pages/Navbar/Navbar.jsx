import React, { useRef, useState } from 'react'
import './Style.scss'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md"

const Navbar = () => {
  const [login, setlogin] = useState(false)
  const [isdark, setisdark] = useState(false)
  const [show, setshow] = useState(false)
  
  const toggle=()=>{
      if(isdark){
        document.body.style.backgroundColor='white'
        document.body.querySelectorAll('a').forEach((item)=>{
          item.style.color='black'
        })
        document.body.style.color='black'
      }else{
        document.body.style.backgroundColor='var(--bg)'
        document.body.querySelectorAll('a').forEach((item)=>{
          item.style.color='white'
        })
        document.body.style.color='white'
      }
      setisdark(!isdark)
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
          <nav>
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
      {isdark?<MdLightMode className='icon' size="2rem" onClick={toggle}/>:<MdDarkMode className='icon' size="2rem" onClick={toggle}/>}
      <GiHamburgerMenu className='icon' size="1.5rem" color='var(--color)' onClick={navtoggle}/>
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