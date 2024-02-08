import React, { useState } from 'react'
import Data  from './components/Data'

const App = () => {
  const [list, setlist] = useState(Data)
  return (
    <div className='h-screen w-full bg-pink-500 flex justify-center items-center'>
      <div className='w-[400px] bg-gray-200 h-fit relative p-1'>
        <p className='p-2 font-semibold text-xl'>{list.length} birthdays today</p>
        {/* list of birthdays */}
        <div className='mb-10'>
           {
            list.map((person)=>{
              return (
               <div className='flex gap-2 p-2 items-center'>
                   <img src={person.image} className='rounded-full h-16 w-16'/>
                   <div className="content flex flex-col gap-0 leading-3 text-sm">
                      <span className='font-bold text-sm'>{person.name}</span>
                      <span>{person.age} years</span>
                   </div>
               </div>
              )
            })
           }
        </div>

        <button className='bg-pink-500 text-white text-xl  m-2 px-10 py-1 rounded-sm absolute bottom-0 w-[350px] ml-6' onClick={()=> setlist([])}>Clear all</button>
      </div>
    </div>
  )
}

export default App