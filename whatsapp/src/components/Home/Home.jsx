import React, { useRef } from 'react'
import Aside from './Aside'
import ChatBox from './ChatBox'

const Home = () => {
  const sideref=useRef(null)
  const closeSide=()=>{
     sideref.current.style.transform='translateX(-100%)'
    }
    const openSide=()=>{
    sideref.current.style.transform='translateX(0%)'
  }
  return (
    <div className='md:flex'>
      <aside className='h-screen w-[300px]   absolute top-0 left-0 md:static bg-zinc-800 text-white transition-all md:translate-x-0 translate-x-[-100%] md:w-[500px] z-10' ref={sideref}>
        <Aside closeSide={closeSide}/>
      </aside>
      <main className='h-screen bg-slate-300 text-white md:w-full'>
        <ChatBox openSide={openSide}/>
      </main>
    </div>
  )
}

export default Home