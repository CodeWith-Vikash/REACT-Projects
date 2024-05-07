import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../context/AuthContext';
import { ChatContext } from '../context/Chatcontext';

const Message = ({message}) => {
    const {currentuser}=useContext(AppContext)
    const {data}=useContext(ChatContext)
    console.log(message);
    const ref=useRef(null)
    useEffect(()=>{
        ref.current?.scrollIntoView({behaviour:"smooth"})
    },[message])
  return (
       <div className=''>
          <div className={message.senderId==currentuser.uid?'owner':'sender'} ref={ref}>
        <div>
            <img src={
                message.senderId==currentuser.uid?
                currentuser.photoURL:
                data.user.photoURL
            } className='rounded-full h-10 w-10'/>
            {/* <p className='text-sm text-gray-800'>just now</p> */}
        </div>
        <div className='bg-white rounded-xl font-semibold max-w-[250px] rounded-tl-none text-center leading-4  mt-4 py-2 text'>
            <span className='m-4'>{message.inputtext}</span>
        {message.img && <img src={message.img} alt="" className='messimg'/>}
        </div>
    </div>
     </div>
  )
}

export default Message