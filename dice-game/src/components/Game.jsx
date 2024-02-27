import React, { useEffect, useState } from 'react'
import styles from './game.module.css'
import sound from './dice.mp3'
import wipe from './wipe.mp3'
import win from './win.mp3'

const Game = () => {
    let dices=[1,2,3,4,5,6]
    const [selected, setselected] = useState(0)
    const [currentDice, setcurrentDice] = useState(0)
    let images=["images/dice_1.png","images/dice_2.png","images/dice_3.png","images/dice_4.png","images/dice_5.png","images/dice_6.png"]
    const [score, setscore] = useState(0)
    const [rules, setrules] = useState(false)

    const generateRandom=()=>{
        if(selected>0){
           new Audio(sound).play()
           // setselected(0)
           // console.log(selected+"selected");
           // console.log(currentDice+"dice");
           if(selected==currentDice+1){
               new Audio(win).play()
               setscore(score+1)
            }else{
                if(score>0){
                    setscore(score-1)
                }
            }
            setcurrentDice(Math.floor(Math.random()*6))
       }
    }
    const resetscore=()=>{
        new Audio(wipe).play()
       setscore(0)
       setcurrentDice(0)
       setselected(0)
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
        <p className={styles.error}>There is a bug in this game the score updates on next click , i'll resolve it soon</p>
        <main className={styles.main}>
            <img src={images[currentDice]} onClick={generateRandom}/>
            <label htmlFor="img">Click on the dice to roll</label>
            <button className={styles.resetBtn} onClick={resetscore}>reset score</button>
            <button className={styles.rules} onClick={()=>setrules(true)}>show rules</button>
            {rules?<div className={styles.rulebox}>
                <h5 onClick={()=>setrules(false)}>Hide Rules</h5>
                <h4>Rules of this game</h4>
                <span>select a number from top right</span>
                <p>Click on the dice</p>
                <p>if selected number matched the dice number you won else lose</p>
            </div>:""}
        </main>
    </div>
  )
}

export default Game