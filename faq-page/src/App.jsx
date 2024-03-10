import React, { useState } from 'react'
import Quest from './components/Quest'
import questions from './components/Data'

const App = () => {
  
  return (
    <div className='container'>
      <h1>Frequently asked questions</h1>
      <div className="box">
        {questions.map((quest)=>{
           return <Quest quest={quest.quest} answer={quest.answer}/>
        })}
      </div>
    </div>
  )
}

export default App