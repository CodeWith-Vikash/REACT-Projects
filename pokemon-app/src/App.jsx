import React, { useEffect } from 'react'
import Pokemons from './components/Pokemons'
import Card from './components/Card'
import { useDispatch } from 'react-redux'
import {fetchdata} from './data/pokeSlice'

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
     dispatch(fetchdata())
  },[])
  return (
    <div className='h-screen bg-gray-800 text-white md:flex'>
      <section className='h-[50vh] md:w-[50vw] md:h-screen flex items-center justify-center'>
        <Card/>
      </section>

      <section className='h-[50vh] overflow-auto md:w-[50vw] md:h-screen flex flex-col justify-between pt-10'>
        <Pokemons/>
      <div className="py-2  w-full h-16 flex items-center justify-center">
        <div className='flex items-center gap-4'>
        <button className='bg-red-800 py-1 font-semibold px-4 rounded-md'>previous</button>
        <button className='bg-red-800 py-1 font-semibold px-4 rounded-md'>Next</button>
        </div>
      </div>
      </section>
    </div>
  )
}

export default App