import React from 'react'
import { BiSolidImageAdd } from "react-icons/bi";
import { IoIosVideocam } from "react-icons/io";
import { RiUserAddFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineAttachFile } from "react-icons/md";
import Message from './Message';


const Chatbox = () => {
  return (
    <div className='chatbox bg-gray-400 h-[93.3vh]'>
        <header className='bg-violet-600 text-white px-6 h-[60px] flex justify-between items-center'>
            <b className='text-lg'>Tyler</b>
            <div className='flex gap-4 items-center'>
              <IoIosVideocam size="1.5rem" style={{cursor:"pointer"}}/>
              <RiUserAddFill size="1.5rem" style={{cursor:"pointer"}}/>
              <BsThreeDots size="1.5rem" style={{cursor:"pointer"}}/>
            </div>
        </header>
        <main className='overflow-auto h-[73vh]'>
             <Message/>
        </main>
        <footer className='h-[60px] bg-white flex justify-between items-center px-4 w-[100%]'>
            <input type="text" placeholder='write something....' className='outline-none bg-transparent px-4 py-2'/>
            <div className='flex items-center gap-4'>
                <input type="file" id='attach' style={{display:"none"}}/>
                <label htmlFor="attach">
                    <MdOutlineAttachFile size="1.5rem" color='gray' style={{cursor:'pointer'}}/>
                </label>
                <input type="file" id='image'  style={{display:"none"}}/>
                <label htmlFor="image">
                    <BiSolidImageAdd size="1.5rem" color='gray' style={{cursor:'pointer'}}/>
                </label>
                <button className='h-7 bg-green-600 text-white px-2 rounded'>send</button>
            </div>
        </footer>
    </div>
  )
}

export default Chatbox