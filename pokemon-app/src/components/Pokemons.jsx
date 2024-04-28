import React from 'react'
import { useSelector } from 'react-redux'

const Pokemons = () => {
   let  arr=[]
   let data=useSelector((state)=>state)
   console.log(data);
   if(data.isloading){
      return <h1 className='text-center text-xl text-yellow-300'>Loading...</h1>
   }
   if(data.iserror){
    return <h1 className='text-center text-xl text-red-500'>an error occured</h1> 
   }
  return (
    <div className='flex flex-wrap gap-4 justify-center p-4'>
        {data.data && data.data.results.map((item)=>{
            return <div className="flex items-center gap-6 bg-blue-400 text-black w-[220px] p-2 rounded-xl font-semibold shadow-xl cursor-pointer" key={item.name}>
            <p>36</p>
            <img src={item.url} className='h-10 w-10'/>
            <p>{item.name}</p>
        </div>
        })}
    </div>
  )
}

export default Pokemons