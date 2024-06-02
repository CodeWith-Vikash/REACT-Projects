import React, { useState } from 'react'
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { MdEmojiEmotions } from "react-icons/md";
import { BiSolidImageAdd } from "react-icons/bi";

const ChatBox = ({openSide}) => {
  const [isEmojiVisible, setisEmojiVisible] = useState(false)
  const [inputval, setinputval] = useState('')

  return (
    <div>
        <nav className='h-[9.2vh] bg-zinc-800 flex items-center px-2 gap-4'>
            <FaArrowAltCircleRight size="2rem" onClick={openSide} className='md:hidden'/>
            <div className='flex items-center gap-1'>
            <img src="https://up.yimg.com/ib/th?id=OIP.7PFJ2-xr8x_3EprzHWmXAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=119&h=119" alt="" className='h-10 rounded-full'/>
            <span>name</span>
          </div>
        </nav>
         <section className='relative h-[80.8vh] bg-gradient-to-b from-zinc-900 via-black to-zinc-900 p-4 overflow-auto flex flex-col gap-6'>
          {/* emoji picker */}
          {isEmojiVisible && <div className='absolute bottom-1 left-1 z-[0] flex-shrink-0'>
          <Picker data={data} onEmojiSelect={(e)=> setinputval(prev => prev+e.native)} />
          </div>}
          {/* chat box */}
            <div className='flex gap-2 flex-row-reverse'> 
            <img src="https://up.yimg.com/ib/th?id=OIP.7PFJ2-xr8x_3EprzHWmXAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=119&h=119" alt="" className='h-10 rounded-full'/>
             <p className='bg-green-500 w-fit p-2 mt-4 rounded-xl text-sm font-semibold rounded-tr-sm h-fit'>hello buddy</p>
            </div>
            {/* sender chat */}
            <div className='flex gap-2 '> 
            <img src="https://up.yimg.com/ib/th?id=OIP.Bv23QwiO7nTO6tvLBeGLLwHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120" alt="" className='h-10 rounded-full'/>
             <p className='bg-blue-500 w-fit p-2 mt-4 rounded-xl text-sm font-semibold rounded-tl-sm h-fit'>what's up dude</p>
            </div>
            {/*  image with text*/}
            <div className='flex gap-2 '> 
            <img src="https://up.yimg.com/ib/th?id=OIP.Bv23QwiO7nTO6tvLBeGLLwHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120" alt="" className='h-10 rounded-full'/>
             <div className='bg-blue-500 w-fit p-1 mt-4 rounded-xl text-sm font-semibold rounded-tl-sm h-fit'>
              <img src="/wallpaper.jpg" alt=""  className='w-[250px] rounded-lg'/>
              <p className='p-2'>this is a test image</p>
             </div>
            </div>
            {/* for sender also */}
            <div className='flex gap-2 flex-row-reverse'> 
            <img src="https://up.yimg.com/ib/th?id=OIP.7PFJ2-xr8x_3EprzHWmXAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=119&h=119" alt="" className='h-10 rounded-full'/>
             <div className='bg-green-500 w-fit p-1 mt-4 rounded-xl text-sm font-semibold rounded-tr-sm h-fit'>
              <img src="https://up.yimg.com/ib/th?id=OIP.a_NBaDZCwiV6fKa7XJ6B9AHaEK&pid=Api&rs=1&c=1&qlt=95&w=204&h=114" alt=""  className='w-[250px] rounded-lg'/>
              <p className='p-2'>this is a test image</p>
             </div>
            </div>

         </section>
         <section className='h-[10vh] bg-black flex items-center gap-4 px-2'>
                <MdEmojiEmotions size="2rem" className='cursor-pointer' onClick={()=> setisEmojiVisible(!isEmojiVisible)}/>

                <input type="file" id='image' className='hidden'/>
                <label htmlFor="image">
                  <BiSolidImageAdd size="2rem"/>
                </label>

                <div className='flex items-center gap-2'>
                <input type="text" placeholder='Write something...' className='px-2 py-1 rounded w-[60vw] text-black outline-none'
                value={inputval}
                onChange={(e)=>setinputval(e.target.value)}
                />
                <button className='bg-green-600 py-1 px-2 font-semibold rounded'>send</button>
                </div>
         </section>
    </div>
  )
}

export default ChatBox