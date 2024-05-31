import React, { useState } from 'react'
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
import EmojiPicker from 'emoji-picker-react';
import { MdEmojiEmotions } from "react-icons/md";

const ChatBox = ({openSide}) => {
  const [isEmojiVisible, setisEmojiVisible] = useState(false)
  return (
    <div>
        <nav className='h-[9.2vh] bg-zinc-800 flex items-center px-2 gap-4'>
            <FaArrowAltCircleRight size="2rem" onClick={openSide} className='md:hidden'/>
            <div className='flex items-center gap-1'>
            <img src="https://up.yimg.com/ib/th?id=OIP.7PFJ2-xr8x_3EprzHWmXAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=119&h=119" alt="" className='h-10 rounded-full'/>
            <span>name</span>
          </div>
        </nav>
         <section className=' h-[80.8vh] relative'>
          {/* emoji picker */}
          {isEmojiVisible && <div className='absolute bottom-1 left-1 z-[0]'>
          <EmojiPicker/>
          </div>}
          {/* chat box */}
         </section>
         <section className='h-[10vh] bg-black flex items-center gap-4 px-2'>
                <MdEmojiEmotions size="2rem" className='cursor-pointer' onClick={()=> setisEmojiVisible(!isEmojiVisible)}/>
                <div className='flex items-center gap-2'>
                <input type="text" placeholder='Write something...' className='px-2 py-1 rounded w-[50vw]'/>
                <button className='bg-green-600 py-1 px-2 font-semibold rounded'>send</button>
                </div>
         </section>
    </div>
  )
}

export default ChatBox