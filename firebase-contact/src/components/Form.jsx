
import { Timestamp, doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import {db} from '../firebase'
import { NavLink } from 'react-router-dom'

const Input = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [address, setaddress] = useState("")
  const [message, setmessage] = useState("")
  const handleSubmit=async (e)=>{
    e.preventDefault()
    const formdata={
       name,
       email,
       phone,
       address,
       message,
       date:Timestamp.fromDate(new Date())
    }
    await setDoc(doc(db,"data",name),formdata)
  }
  return (
    <div className='bg-gray-600 min-h-screen flex justify-center items-center'> 
       <form className='bg-white p-10 rounded-lg flex flex-col gap-8 m-6 max-w-[600px]' onSubmit={handleSubmit}>
          <h1 className='font-semibold text-xl'>Contact</h1>
           <section className='flex flex-wrap gap-5 '>
           <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-sm text-gray-300'>Your name</label>
              <input type="text" placeholder='Enter your name' className='outline-none border-b-2 border-zinc-200 p-2'
               value={name}
               onChange={(e)=> setname(e.target.value)}
              />
            </div>


            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-sm text-gray-300'>Email</label>
              <input type="text" placeholder='Enter your Email' className='outline-none border-b-2 border-zinc-200 p-2'
              value={email}
               onChange={(e)=> setemail(e.target.value)}
              />
            </div>


            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-sm text-gray-300'>Phone Number</label>
              <input type="text" placeholder='Enter your contact no.' className='outline-none border-b-2 border-zinc-200 p-2'
               value={phone}
                onChange={(e)=> setphone(e.target.value)}
              />
            </div>


            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-sm text-gray-300'>Address</label>
              <input type="text" placeholder='Enter your address' className='outline-none border-b-2 border-zinc-200 p-2'
               value={address}
                onChange={(e)=> setaddress(e.target.value)}
              />
            </div>


            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-sm text-gray-300'>Message</label>
              <textarea cols="30" rows="5" placeholder='your message here..' className='outline-none border-b-2 border-zinc-200 p-2'
               value={message}
                onChange={(e)=> setmessage(e.target.value)}
              ></textarea>
            </div>
           </section>
           <button className='bg-red-600 text-white rounded-lg py-2'>Submit</button>
       <p>You have to get data? <NavLink to="/search" className="text-red-600">Search</NavLink></p>
       </form>
    </div>
  )
}

export default Input