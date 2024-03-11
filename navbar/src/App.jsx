import React, { useRef, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";




const App = () => {
  const navref=useRef('')
  const [isactive, setisactive] = useState(false)
  const show=()=>{
     navref.current.style.transform='translate(0%)'
     setisactive(true)
    }
    const hide=()=>{
      navref.current.style.transform='translate(-100%)'
      setisactive(false) 
  }
  return (
    <div className='container'>
      <nav>
        <div className="logo">
          <h1>React</h1>
          <img src="src\react.svg" />
        </div>
        {isactive?<FaXmark className='icon' onClick={hide}/>:<GiHamburgerMenu  className='icon' onClick={show}/>}
      </nav>
      <div className="nav-section" ref={navref}>
         <p>Home</p>
         <p>About</p>
         <p>Contact</p>
         <p>Projects</p>
      </div>
    </div>
  )
}

export default App