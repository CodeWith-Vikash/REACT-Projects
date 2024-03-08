import React, { useState } from 'react'
import Quiz from './components/Quiz'
import Start from './components/Start'

const App = () => {
  const [isstart, setisstart] = useState(false)
  const [name, setname] = useState('')
  const switchstart=(val,text)=>{
    setisstart(val)
    setname(text)
  }
  return (
    <div className='container'>
      <div className="box">
         {!isstart?<Start switchstart={switchstart}/>:<Quiz name={name}/>}
      </div>
    </div>
  )
}

export default App