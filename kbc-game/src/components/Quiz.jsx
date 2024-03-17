import React, { useEffect, useRef, useState } from 'react'
import './Quiz.css'
import questions  from './Data'

const Quiz = ({resetgame}) => {
    let price= [
        { id: 0, value: 100 },
        { id: 1, value: 200 },
        { id: 2, value: 300 },
        { id: 3, value: 500 },
        { id: 4, value: 1000 },
        { id: 5, value: 2000 },
        { id: 6, value: 4000 },
        { id: 7, value: 8000 },
        { id: 8, value: 16000 },
        { id: 9, value: 32000 },
        { id: 10, value: 64000 },
        { id: 11, value: 125000 },
        { id: 12, value: 250000 },
        { id: 13, value: 500000 },
        { id: 14, value: 1000000 }
    ]

    const [win, setwin] = useState(false)
    const [number, setnumber] = useState(0)
    const [showstatement, setshowstatement] = useState(false)
    const [showfinal, setshowfinal] = useState(false)
    const [time, settime] = useState(30)
    let answerref=useRef(null)

    const checkanswer=(E,answer)=>{
        answerref.current=E.target
        console.log(E.target);
        if(answer.isCorrect){
            settime(30)
            setwin(true)
            answerref.current.style.backgroundColor='green'
            let audio=new Audio
            audio.src='src/Assests/correct.mp3'
            audio.play()
            if(number<14){
                setTimeout(() => {
                    setnumber(number+1)
                    setwin(false)
                    answerref.current.style.backgroundColor='rgb(45, 21, 68)'
                    audio.pause()
                },2000);
            }else{
                setTimeout(() => {
                    setshowfinal(true)
                    let audio=new Audio
                    audio.src='src/Assests/final.mp3'
                    audio.play()
                    setTimeout(() => {
                        audio.pause()
                    },12000);
                },2000);
            }
        }else{
            setwin(false)
            answerref.current.style.backgroundColor='red'
            setTimeout(() => {
                setshowstatement(true)
            }, 2000);
            let audio=new Audio
            audio.src='src/Assests/$2,000 Lose - Who Wants to Be a Millionaire_ (480p).mp4'
            audio.play()
        }
        // setplayed(!played)
    }
    useEffect(()=>{
        if(time>0){
          let interval=setInterval(()=>{
                settime(time-1)
            },1000)
            return ()=> clearInterval(interval)
        }else{
            setwin(false)
            setshowstatement(true)
        }
    },[time])

    let {questionText,answerOptions} =questions[number]

  return (
    <div className='quiz'>
           
           {showfinal?<div className='final'>
               congrats you won $1000000
               <button onClick={()=> resetgame()}>play again</button>
           </div>:!showstatement?<div className="question">
             <div className="time">
                 {time}
             </div>
             <p>{questionText}</p>
              <div className="options">
                 {
                    answerOptions.map((answer,index)=>{
                        return <span onClick={(E)=> checkanswer(E,answer)} key={index}>{answer.answerText}</span>
                    })
                 }
              </div>
        </div>:<div className="over">
               <>
                  {
                    number>0?`you won $ ${price[number-1].value} ` :`you lost better luck next time`
                  }
               </>
                <button onClick={()=> resetgame()}>play again</button>
            </div>}

        <div className="price">
            {price.map((item,index)=>{
                return <b key={index} className={item.id==number ?'active':""}>${item.value}</b>
            })}
        </div>
    </div>
  )
}

export default Quiz