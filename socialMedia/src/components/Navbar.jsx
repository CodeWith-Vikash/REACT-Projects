import React from 'react'
import styles from './Navbar.module.css'
import { FaUser } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({togglenav}) => {
  return (
    <nav>
        <h1>Iamsocial</h1>
        <div className={styles.content}>
        <input type="text" placeholder='search for friends posts or videos'/>
        <div className={styles.title}>
            <small>Homepage</small>
            <small>Timeline</small>
        </div>
        <div className={styles.icons}>
           <FaUser size="1.3rem"/>
           <MdChat size="1.3rem"/>
            <IoNotifications size="1.3rem"/>
        </div>
          <img src="https://tse1.mm.bing.net/th?id=OIP.L9TDz5qgN6cJxSnqK8XDGQHaHa&pid=Api&P=0&h=220" />
        </div>
        <GiHamburgerMenu className={styles.ham} size="3vmax" style={{cursor:'pointer'}} onClick={()=>togglenav()}/>
    </nav>
  )
}

export default Navbar