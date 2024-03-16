import React from 'react'
import styles from './Rightbar.module.css'
import friends from './Data'


const Rightbar = () => {
  return (
    <div className={styles.Rightbar}>
        <div className={styles.birthday}>
            <span>🎁</span>
            <b>Rolex joe and 5 others friends have birthday today</b>
        </div>
        <div className={styles.add}>
            <h2>Fell the vibe & celebrate </h2>
        </div>
        <div className={styles.online}>
            <b>Online friends</b>
            {friends.map((person)=>{
                return  <div className={styles.friend} key={person.rollno}>
                <img src={person.image}/>
                <div className={styles.circle}></div>
                <span>{person.username}</span>
        </div>
        
            })}
        </div>
    </div>
  )
}

export default Rightbar