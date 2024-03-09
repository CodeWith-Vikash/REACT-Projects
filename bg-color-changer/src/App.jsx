import React, { useState } from 'react'

const App = () => {
  const [color, setcolor] = useState('black')
  return (
    <div className='container' style={{backgroundColor:color}}>
      <nav>
         <button id='white' onClick={()=> setcolor('white')}>white</button>
         <button id='blue' onClick={()=> setcolor('blue')}>blue</button>
         <button id='red' onClick={()=> setcolor('red')}>red</button>
         <button id='oranged' onClick={()=> setcolor('orangered')}>orangered</button>
         <button id='green' onClick={()=> setcolor('green')}>green</button>
      </nav>
    </div>
  )
}

export default App