import React from 'react'
import './Home.css'
import Video from './Video'
import { IoMdHome } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { MdLibraryMusic } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { FaRegNewspaper } from "react-icons/fa6";


const Home = () => {
  const arr=[1,2,3,4,5,6,7,8,5,5]
  return (
    <div className='home'>
       <aside>
         <div className="option">
           <IoMdHome size="1.5rem"/>
           <p>Home</p>
         </div>
         {/* '''''''' */}
         <div className="option">
           <SiYoutubegaming size="1.5rem"/>
           <p>Gaming</p>
         </div>
         {/* '''''''' */}
         <div className="option">
           <FaCarAlt size="1.5rem"/>
           <p>Automobiles</p>
         </div>
         {/* '''''''' */}
         <div className="option">
           <MdOutlineSportsSoccer size="1.5rem"/>
           <p>Sports</p>
         </div>
         {/* '''''''' */}
         <div className="option">
           <MdOutlineScreenSearchDesktop size="1.5rem"/>
           <p>Entertainment</p>
         </div>
         {/* '''''''' */}
         <div className="option">
           <GrTechnology size="1.5rem"/>
           <p>Technology</p>
         </div>
         {/* '''''''' */}
         <div className="option">
           <MdLibraryMusic size="1.5rem"/>
           <p>Music</p>
         </div>
         {/* '''''''' */}
         <div className="option">
           <LiaBlogSolid size="1.5rem"/>
           <p>Blog</p>
         </div>
         {/* '''''''' */}
         <div className="option">
           <FaRegNewspaper size="1.5rem"/>
           <p>News</p>
         </div>
         {/* '''''''' */}
       </aside>
        <div className="videos">
        {arr.map((item)=>{
          return <Video/>
        })}
        </div>
    </div>
  )
}

export default Home