import React, { useState } from 'react'
import Option from './Option'
import questions from './Data'


let custumstyle={
    backgroundColor:"black",
    color:'white',
    borderRadius:'5px'
}
const Quiz = ({name}) => {
    const [num,setnum]=useState(0)
    let data= questions[num]
    console.log(num);

    const {quest,options} =data
    // console.log(options);
  return (
    <div className='quiz'>
      <h2>Welcome, {name}</h2>
        <h3>{quest}</h3>
         {options.map((item,index)=>{
             return <Option text={item} key={index}/>
         })}
        <button style={custumstyle} onClick={()=> num<questions.length-1 ? setnum(num+1):setnum(0)}>Next question</button>
    </div>
  )
}

export default Quiz