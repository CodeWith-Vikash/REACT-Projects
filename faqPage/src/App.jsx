import React from 'react'
import Question from './Components/Question'

const App = () => {
  return (
    <div className='h-screen bg-violet-700 w-full flex justify-center items-center'>
     <div className='bg-white w-[550px] h-fit rounded-lg flex'>
       <div className="first w-[35%]">
          <h1 className='text-xl font-bold p-4'>Questions and answers about login</h1>
       </div>
       <div className="second  w-[65%] p-2">
        <Question i="0"/>
        <Question i="1"/>
        <Question i="2"/>
        <Question i="3"/>
        <Question i="4"/>
       </div>
     </div>
    </div>
  )
}

export default App