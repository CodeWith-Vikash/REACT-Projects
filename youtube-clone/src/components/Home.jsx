import React, { useContext } from 'react'
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
import { Appcontext } from '../context/Vidcontext';


const Home = () => {
  const {videos}=useContext(Appcontext)
  return (
    <div className='home'>
       <aside>
        <div className="area">
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
        </div>
        
        <div className="subscritpt">
          <b>Subscription</b>
          <div className="chanel">
            <img src="https://up.yimg.com/ib/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="chanel" />
            <p>peter pots</p>
          </div>
          {/* 000000000000 */}
          <div className="chanel">
            <img src="https://up.yimg.com/ib/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="chanel" />
            <p>peter pots</p>
          </div>
          {/* 000000000000 */}
          <div className="chanel">
            <img src="https://up.yimg.com/ib/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="chanel" />
            <p>peter pots</p>
          </div>
          {/* 000000000000 */}
          <div className="chanel">
            <img src="https://up.yimg.com/ib/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="chanel" />
            <p>peter pots</p>
          </div>
          {/* 000000000000 */}
          <div className="chanel">
            <img src="https://up.yimg.com/ib/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="chanel" />
            <p>peter pots</p>
          </div>
          {/* 000000000000 */}
        </div>
       </aside>
        <div className="videos">
        {videos.map(video => (
          <li key={video.id}>
            <iframe
              width="300"
              height="230"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
              ></iframe>
              <h4>{video.snippet.title}</h4>
          </li>
        ))}
        </div>
    </div>
  )
}

export default Home