import React, { useContext, useEffect, useState } from 'react'
import { BiSolidImageAdd } from "react-icons/bi";
import { IoIosVideocam } from "react-icons/io";
import { RiUserAddFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineAttachFile } from "react-icons/md";
import Message from './Message';
import { ChatContext } from '../context/Chatcontext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase';
import { AppContext } from '../context/AuthContext';


const Chatbox = () => {
  const {currentuser}=useContext(AppContext)
  const {data}=useContext(ChatContext)
  const [messages, setmessages] = useState([])
  const [inputtext, setinputtext] = useState("")
  const [inputimg, setinputimg] = useState(null)
  useEffect(()=>{
    const unsub=onSnapshot(doc(db,"chats",data.chatId),(doc)=>{
       doc.exists() && setmessages(doc.data().messages)
    })
    return ()=>{
      unsub()
    }
  },[data.chatId])
  console.log(messages);

  const handlesend=()=>{
    if(inputimg){

    }else{

    }
  }
  return (
    <div className='chatbox bg-gray-400 h-[93.3vh]'>
        <header className='bg-violet-600 text-white px-6 h-[60px] flex justify-between items-center'>
            <b className='text-lg'>{data.user?.displayName}</b>
            <div className='flex gap-4 items-center'>
              <IoIosVideocam size="1.5rem" style={{cursor:"pointer"}}/>
              <RiUserAddFill size="1.5rem" style={{cursor:"pointer"}}/>
              <BsThreeDots size="1.5rem" style={{cursor:"pointer"}}/>
            </div>
        </header>
        <main className='overflow-auto h-[73vh]'>
            {messages.map((m)=>{
               return <Message key={m} message={m}/>
            })}
        </main>
        <footer className='h-[60px] bg-white flex justify-between items-center px-4 w-[100%]'>
            <input type="text" placeholder='write something....' className='outline-none bg-transparent px-4 py-2'
             value={inputtext}
              onChange={e=>setinputtext(e.target.value)}
            />
            <div className='flex items-center gap-4'>
                <input type="file" id='attach' style={{display:"none"}} onChange={e=>setinputimg(e.target.files[0])}/>
                <label htmlFor="attach">
                    <MdOutlineAttachFile size="1.5rem" color='gray' style={{cursor:'pointer'}}/>
                </label>
                <input type="file" id='image'  style={{display:"none"}} onChange={e=>setinputimg(e.target.files[0])}/>
                <label htmlFor="image">
                    <BiSolidImageAdd size="1.5rem" color='gray' style={{cursor:'pointer'}}/>
                </label>
                <button className='h-7 bg-green-600 text-white px-2 rounded' onClick={handlesend}>send</button>
            </div>
        </footer>
    </div>
  )
}

export default Chatbox