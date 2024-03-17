import React, { useState } from 'react'
import styles from './Feed.module.css'
import { BiSolidTag } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import friends from './Data';
import Userpost from './Userpost';



const Feed = () => {
  
  return (
    <div className={styles.Feed}>
       <div className={styles.post}>
            <div className={styles.message}>
                <img src="https://tse1.mm.bing.net/th?id=OIP.L9TDz5qgN6cJxSnqK8XDGQHaHa&pid=Api&P=0&h=220"/>
                <input type="text" placeholder='What,s in your mind ?' />
                <button>post</button>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.postcontent}>
            <div className={styles.options}>
                <div className={styles.option}>
                    <span>📷</span>
                    <b>Gallery</b>
                </div>
                <div className={styles.option}>
                    <FaLocationDot style={{color:'green'}} size=""/>
                    <b>Location</b>
                </div>
                <div className={styles.option}>
                    <BiSolidTag style={{color:'blue'}} size=""/>
                    <b>Tag</b>
               </div>
                <div className={styles.option}>
                    <span>😄</span>
                    <b>Feelings</b>
                </div>
            </div>
            
            </div>
       </div>

       {/* user post */}
       {friends.map((user)=>{
          return <Userpost image={user.image} title={user.title} post={user.post} username={user.username} key={user.rollno}/>
       })}
    </div>
  )
}

export default Feed