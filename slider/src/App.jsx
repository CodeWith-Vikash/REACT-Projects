import React, { useState } from 'react'
import people from './Data.jsx'
import { ArrowLeftCircle, ArrowRightCircle,CheckCheck } from 'lucide-react'

const App = () => {
  const [value, setvalue] = useState(0)
  const {image,name,title,quote,id} = people[value]
  return (
    <div className='bg-gray-200 h-screen w-full pt-8 relative'>
      <h1 className='text-center font-semibold text-2xl'>Reviews</h1>

        <div className='flex justify-center mt-[10vh]'>
          
      <section className='text-center shadow-xl w-[480px] p-2 bg-white'>
        <img src={image} className='rounded-full w-[170px] h-[165px] my-0 mx-auto' />
        <b className='text-orange-700 text-xl font-semibold'>{name}</b>
        <br />
        <span className='font-semibold text-sm'>{title}</span>
        <p className='leading-5 font-semibold text-gray-800 pt-4'>{quote}</p>

        <CheckCheck size={40} color="#ed2602" strokeWidth={3} className='my-2 mx-auto'/>
        <div>
        <ArrowLeftCircle className=' absolute left-3 top-1/2'onClick={()=>{
            if(value>0){
              setvalue(value-1)
            }
          }}/>
          <ArrowRightCircle className=' absolute right-3 top-1/2' onClick={()=>{
            if(value<people.length-1){
              setvalue(value+1)
            }
          }}/>
        </div>
      </section>
        </div>
    </div>
  )
}

export default App