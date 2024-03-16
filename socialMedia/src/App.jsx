import React, { useRef, useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import { FaUser } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { MdRssFeed } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const App = () => {
  const [islogin, setislogin] = useState(false)
  const [isnav, setisnav] = useState(false)
  const loginbox=()=>{
       setislogin(!islogin)
  }
  const navref=useRef(null)
  const togglenav=()=>{
    setisnav(!isnav)
     if(isnav){
      navref.current.style.transform='translate(-100%)'
     }else{
      navref.current.style.transform='translate(0%)'
     }
  }
  return (
    <div className='container'>
      <div className="nav" ref={navref}>
      <input type="text" placeholder='search for friends posts or videos'/>
      <b>Homepage</b>
      <b>Timeline</b>
      <div className="important">
           <FaUser />
           <MdChat />
            <IoNotifications/>
      <img src="https://tse1.mm.bing.net/th?id=OIP.L9TDz5qgN6cJxSnqK8XDGQHaHa&pid=Api&P=0&h=220" />
      </div>
      <div className="navoption">
                <MdRssFeed />
                <b>Feed</b>
            </div>
            <div className="navoption">
               <BsChatSquareTextFill  size="1.1rem"/>
                <b>Chats</b>
            </div>
            <div className="navoption">
                <BiSolidVideos size="1.1rem"/>
                <b>Videos</b>
            </div>
            <div className="navoption">
                <MdGroups size="1.1rem"/>
                <b>Groups</b>
            </div>
            <div className="navoption">
                <FaBookmark size="1.1rem"/>
                <b>Bookmarks</b>
            </div>
            <div className="navoption">
                <FaRegQuestionCircle size="1.1rem"/>
                <b>Questions</b>
            </div>
            <div className="navoption">
                <IoBagSharp size="1.1rem"/>
                <b>Jobs</b>
            </div>
            <div className="navoption">
                <MdEventAvailable size="1.1rem"/>
                <b>Events</b>
            </div>
            <div className="navoption">
                <FaGraduationCap size="1.1rem"/>
                <b>Courses</b>
            </div>
      </div>
      {/* {islogin?<Login loginbox={loginbox}/>:<Register loginbox={loginbox}/>} */}
      <Navbar togglenav={togglenav}/>
      <Content/>
    </div>
  )
}

export default App