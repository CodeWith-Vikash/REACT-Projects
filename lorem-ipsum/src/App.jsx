import React from 'react'
import { useState } from 'react'
import data from './Data.jsx'

const App = () => {
  const [count, setcount] = useState(1)
  const [text, settext] = useState([])

  const handleClick = ()=>{
    let amount=parseInt(count)
    if(count<=0){
      amount=1
    }
    if(count>=8){
      amount=8
    }
    settext(data.slice(0,amount))
  }
  return (
    <div className='bg-gray-200 min-h-screen w-full'>
       <h1 className='text-center font-bold text-2xl p-4'>Tired of boring lorem ipsum</h1>

       <div className='w-fit my-0 mx-auto'>
          <label htmlFor="" className='font-semibold text-lg'>Paragraph : </label>
          <input type="number" className='w-10 pl-1 outline-none'
                 value={count}
                 onChange={(e)=> setcount(e.target.value)}
          />
          <button className='bg-blue-600 px-2 py-1 rounded-sm text-white font-semibold mx-4' onClick={handleClick}>Generate</button>
       </div>
         <div>
            {
              text.map((para)=>{
                 return <p className='text-center px-6 py-4 font-semibold text-gray-800'>{para}</p>
             })
            }
         </div>
    </div>
  )
}

export default App