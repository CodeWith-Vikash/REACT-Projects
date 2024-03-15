import React from 'react'
import styles from './Navbar.module.css'
import { FaUser } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav>
        <h1>Iamsocial</h1>
        <input type="text" placeholder='search for friends posts or videos'/>
        <div className={styles.content}>
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
        <select>
           <option><small>Homepage</small></option>
           <option><small>Timeline</small></option>
           <option><small>Friends</small></option>
           <option><small>Messages</small></option>
           <option><small>Notifications</small></option>
           <option><small>Profile</small></option>
        </select>
    </nav>
  )
}

export default Navbar