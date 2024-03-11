import React, { useState } from 'react'
import questions from './Data'
import Score from './Score'


let custumstyle={
    backgroundColor:"black",
    color:'white',
    borderRadius:'5px'
}
const Quiz = ({name}) => {
    const [score, setscore] = useState(0)
    const [showScore, setshowScore] = useState(false)
    const [num,setnum]=useState(0)
    let data= questions[num]
    console.log(num);

    const {questionText:quest,answerOptions:options} =data
    // console.log(options);

    const updatequest=(item)=>{
       if(num<questions.length-1){
         setnum(num+1)
       }else{
          setshowScore(true)
       }
      if(item.isCorrect){
         setscore(score+1)
      }
    }
  return (
     !showScore?<div className='quiz'>
     <h2>Welcome, {name}</h2>
       <h3>{num+1}/4 .{quest}</h3>
        {options.map((item,index)=>{
            return <button key={index} onClick={()=> updatequest(item)}>{item.answerText}</button>
        })}
   </div>:<Score score={score} length={questions.length}/>
  )
}

export default Quiz