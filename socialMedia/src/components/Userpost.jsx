import React, { useCallback, useEffect, useState } from 'react'
import styles from './Feed.module.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";

const Userpost = ({image,post,title,username}) => {
    const [likes, setlikes] = useState(Math.floor(Math.random()*99)+1)
    const [isliked, setisliked] = useState(false)
    const [hours, sethours] = useState(0)
    const [comments, setcomments] = useState(0)
  const updatelike=useCallback(()=>{
    if(isliked){
       setlikes(likes-1)
    }else{
       setlikes(likes+1)
    }
    setisliked(!isliked)
},[isliked,likes])

useEffect(()=>{
    sethours(Math.floor(Math.random()*12)+1)
    setcomments(Math.floor(Math.random()*99)+1)
},[])
  return (
    <div className={styles.userpost}>
          <div className={styles.userp}>
              <div className={styles.user}>
                  <img src={image}/>
                 <b>{username}</b>
                 <small>{hours} hour ago.</small>
              </div>
              <BsThreeDotsVertical  className={styles.icon}/>
          </div>
              <p>{title}</p>
              <img src={post} className={styles.img}/>
             <div className={styles.react}>
                 <div className={styles.like}>
                   <AiFillLike style={{color:'blue',cursor:'pointer'}} className={styles.icon} onClick={updatelike}/>
                   <FcLike style={{cursor:'pointer'}} className={styles.icon} onClick={updatelike}/>
                   <p>{isliked?'you and ':""}{likes} people liked it</p>
                 </div>
                 <p>{comments} comments</p>
              </div>
          </div>
  )
}

export default Userpost