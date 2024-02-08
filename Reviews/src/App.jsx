import React, { useState } from 'react'
import reviews from './data'
const App = () => {
  const [data, setdata] = useState(reviews)
  const [index, setindex] = useState(0)

  const next=()=>{
    if(index<data.length-1){
      setindex(index+1)
      console.log(index);
    }
  }
  
  const prev=()=>{
    if(index>0){
      setindex(index-1)
      console.log(index);
    }
  }

  const randomReview=()=>{
    let random=Math.floor(Math.random()*3)
    setindex(random)
  }
  return (
    <div className='bg-gray-300 h-screen w-full flex justify-center pt-[20vh]'>{
         
          <div className='bg-white h-fit w-[450px] text-center py-4 rounded-md shadow-md'>

           <div className="image w-full flex justify-center">
           <img src={data[index].image} className='rounded-full h-32 w-30'/>
           </div>

          <div className="content">
            <h3 className='font-bold text-xl'>{data[index].name}</h3>
            <span className='text-blue-700 font-semibold'>{data[index].job}</span>
            <p className='text-center px-10 pt-4 leading-5 text-gray-800'>{data[index].text}</p>
            <div className="navigators flex gap-4 justify-center p-4">
            <i class="fa-solid fa-arrow-left text-2xl hover:bg-slate-400 px-2 cursor-pointer" onClick={prev}></i>
            <i class="fa-solid fa-arrow-right text-2xl hover:bg-slate-400 px-2 cursor-pointer" onClick={next}></i>
            </div>
            <button className='bg-blue-600 text-white px-3 py-1 rounded-lg' onClick={randomReview}>Surprise me</button>
          </div>
          </div>
    }
    </div>
  )
}

export default App