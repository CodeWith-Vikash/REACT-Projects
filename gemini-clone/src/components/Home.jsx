import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import { RiImageAddFill } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import {Aicontext} from '../config/gemini'

const Home = () => {
    const [inutval, setinutval] = useState("")
    const {data,getdata,isloading,response}=useContext(Aicontext)
  return (
    <div className='h-screen bg-zinc-900 text-white'>
        <Navbar/>
       <main className='overflow-auto h-[85vh] flex justify-center'>
       {isloading?<b>Loading...</b>:response?<section>
           <p>{data}</p>
       </section>:<section id='hero' className='max-w-[500px] leading-tight px-6 py-4'>
            <h2 className='text-[45px]'>Hello, Vikash</h2>
            <p className='text-[45px] font-semibold text-zinc-600'>How can i help you today?</p>
        </section>}
       </main>

        
        <section id='input' className='absolute bottom-5 w-full px-4 flex justify-center'>
           <div className='flex justify-between items-center bg-zinc-700 h-16 gap-10 pr-8  rounded-full w-full max-w-[800px]'>
           <input type="text" className='h-10 w-full font-semibold text-lg px-4 bg-transparent outline-none' placeholder='Enter a prompt here' autoFocus
            value={inutval}
            onChange={(e)=> setinutval(e.target.value)}
            onKeyDown={(e)=>{
                if(e.key=="Enter"){
                    getdata(inutval)
                }
            }}
           />
            <div className="icons flex gap-4">
                <RiImageAddFill size="1.5rem" className='cursor-pointer text-gray-200'/>
                <FaMicrophone size="1.4rem" className='cursor-pointer text-gray-200'/>
            </div>
           </div>
        </section>
    </div>
  )
}

export default Home