import React, { useContext } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlayCircle } from "react-icons/fa";
import { IoVideocamSharp } from "react-icons/io5";
import { PiCirclesFourFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from '../context/SearchContext';


const Navbar = () => {
    const {setinputval,inputval,getSerachData} = useContext(SearchContext)
  return (
    <nav>
        <div className="logo-sec">
            <div className="logo">
                <FaPlayCircle size="2rem" color='red'/>
                <h1>VideosHub</h1>
            </div>
        </div>
        {/* <div className="search">
            <input type="text" placeholder='serach' value={inputval}
              onChange={(e)=>setinputval(e.target.value)}
              onKeyDown={(e)=>{
                if(e.key=="Enter"){
                    getSerachData()
                }
              }}
            />
            <FaSearch color='gray' onClick={getSerachData} style={{cursor:"pointer"}}/>
        </div> */}
        <div className="options-sec">
        <div className="options">
            <IoVideocamSharp size="1.2rem" color='red'/>
            <PiCirclesFourFill size="1.2rem"/>
            <IoNotifications size="1.2rem"/>
            <img src="https://up.yimg.com/ib/th?id=OIP.ViGlpoU2qdl9vGC1mxhpNgHaHa&pid=Api&rs=1&c=1&qlt=95&w=105&h=105" alt="profile" />
        </div>
        </div>
    </nav>
  )
}

export default Navbar