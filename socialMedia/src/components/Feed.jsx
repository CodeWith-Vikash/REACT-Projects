import React from 'react'
import styles from './Feed.module.css'
import { BiSolidTag } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";



const Feed = () => {
  return (
    <div className={styles.Feed}>
       <div className={styles.post}>
            <div className={styles.message}>
                <img src="https://up.yimg.com/ib/th?id=OIP.Cq9NyAKK3SFpwJhBrNI8cQHaHD&pid=Api&rs=1&c=1&qlt=95&w=111&h=106"/>
                <input type="text" placeholder='What,s in your mind ?' />
            </div>
            <div className={styles.hr}></div>
            <div className={styles.postcontent}>
            <div className={styles.options}>
                <div className={styles.option}>
                    <span>📷</span>
                    <b>Photo or video</b>
                </div>
                <div className={styles.option}>
                    <FaLocationDot style={{color:'green'}} size="1.6rem"/>
                    <b>Location</b>
                </div>
                <div className={styles.option}>
                    <BiSolidTag style={{color:'blue'}} size="1.6rem"/>
                    <b>Tag</b>
               </div>
                <div className={styles.option}>
                    <span>😄</span>
                    <b>Feelings</b>
                </div>
            </div>
            <button>post</button>
            </div>
       </div>
       <div className={styles.userpost}>
           <div className={styles.userp}>
           <div className={styles.user}>
             <img src="https://up.yimg.com/ib/th?id=OIP.Cq9NyAKK3SFpwJhBrNI8cQHaHD&pid=Api&rs=1&c=1&qlt=95&w=111&h=106"/>
             <b>Laura bancho</b>
             <small>1 hour ago.</small>
           </div>
           <BsThreeDotsVertical size="1.5rem"/>
           </div>
           <p>this post is about how programming sucks</p>
           <img src="src\components\pexels-ines-martin-6200867.jpg" className={styles.img}/>
       </div>
    </div>
  )
}

export default Feed