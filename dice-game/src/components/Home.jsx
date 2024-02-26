import React from 'react'
import styles from './app.module.css'
const Home = ({play}) => {
  return (
    <div className={styles.main}>
    <img src="images/dices.png" alt="" />
    <div className={styles.mainContent}>
       <h1>
         Dice Game
       </h1>
       <button onClick={()=>play(true)}>Play Now</button>
    </div>
 </div>
  )
}

export default Home