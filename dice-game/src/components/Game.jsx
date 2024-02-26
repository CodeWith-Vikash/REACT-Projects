import React, { useState } from 'react'
import styles from './game.module.css'

const Game = () => {
    let dices=[1,2,3,4,5,6]
    const [selected, setselected] = useState(0)
    const [currentDice,setCurrentDice]=useState(0)
    let images=["images/dice_1.png","images/dice_2.png","images/dice_3.png","images/dice_4.png","images/dice_5.png","images/dice_6.png"]
    const [score, setscore] = useState(0)

    const generateRandom=()=>{
        let random=Math.floor(Math.random()*6)
        setCurrentDice(random)
        // setselected(0)
        console.log(selected+"selected");
        console.log(random+"dice");
        if(selected==currentDice){
            setscore(score+(random+1))
        }else{
            setscore(score-(random+1))
        }
    }
  return (
    <div>
        <header className={styles.header}>
            <div className={styles.score}>
                <b>{score}</b>
                <label htmlFor="b">Your score</label>
            </div>
            <ul className={styles.options}>
                {
                    dices.map((value,i)=>{
                        return <li key={i} onClick={()=> setselected(value)} className={selected==value? styles.selected :""}>{value}</li>
                    })
                }
            </ul>
        </header>
        <p className={styles.error}>{selected==0 ?"Please select a number to play":""}</p>
        <main className={styles.main}>
            <img src={images[currentDice]} onClick={generateRandom}/>
            <label htmlFor="img">Click on the dice to roll</label>
            <button className={styles.resetBtn}>reset score</button>
            <button className={styles.rules}>show rules</button>
        </main>
    </div>
  )
}

export default Game