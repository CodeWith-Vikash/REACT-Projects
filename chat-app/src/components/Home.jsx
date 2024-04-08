import React, { useRef, useState } from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Sidebar from './Sidebar'
import Chatbox from './Chatbox'


const Home = () => {
  const [ishide, setishide] = useState(false)
  const sideref=useRef(null)
  const hidesidebar=()=>{
    setishide(true)
     sideref.current.style.transform="translate(-100%)"
  }
  const showsidebar=()=>{
    setishide(false)
     sideref.current.style.transform="translate(0%)"
  }
  return (
    <div className='home h-screen bg-blue-400'>
      <div className="sideleft bg-gray-600 w-[318px] h-screen absolute" ref={sideref}>
        <div className="iconm bg-blue-500 h-10 flex items-center justify-end px-4">
          <FaArrowAltCircleLeft size="1.5rem" color='white' style={{cursor:"pointer"}} onClick={hidesidebar}/>
        </div>
          <Sidebar/>
      </div>
      <div className="chatside bg-gray-950 w-full h-screen">
        <div className="iconm bg-transparent h-10 px-6 flex items-center" style={{cursor:"pointer"}} onClick={showsidebar}>
           {ishide && <FaArrowAltCircleRight size="1.5rem " color='white'/>}
        </div>
        <Chatbox/>
      </div>
    </div>
  )
}

export default Home