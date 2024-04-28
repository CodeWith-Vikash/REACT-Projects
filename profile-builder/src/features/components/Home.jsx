import React, { useState } from 'react'
import Nav from './Nav'
import { BiSolidImageAdd } from "react-icons/bi";
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {addProfile} from '../profileSlice'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate()
  const [image, setimage] = useState()
  const dispatch=useDispatch()
  const handlesubmit=async(e)=>{
    e.preventDefault()
    const data={
      id:nanoid(),
      name:e.target[0].value,
      skills:e.target[1].value,
      jobrole:e.target[2].value,
      experience:e.target[3].value,
      imageurl:URL.createObjectURL(image)
    }
    dispatch(addProfile(data))
    navigate("/profile")
  }
  return (
    <div className='h-screen bg-green-500'>
        <Nav/>
        <div className='h-[90vh] flex justify-center items-center'>
        <form className='flex w-[500px] gap-10 bg-slate-700 min-h-[70vh] rounded-lg flex-col py-10 relative' onSubmit={(e)=>handlesubmit(e)}>
            <div className='flex flex-wrap gap-6 justify-center'>
            <input type="text" placeholder='Name' className='rounded-lg py-2 px-4 outline-none' required/>
            <input type="text" placeholder='Skills' className='rounded-lg py-2 px-4 outline-none' required />
            <input type="text" placeholder='Job role' className='rounded-lg py-2 px-4 outline-none' required />
            <input type="text" placeholder='Experience'  className='rounded-lg py-2 px-4 outline-none' required/>
            </div>
             <input type="file" id='hide' style={{display:"none"}} required onChange={e => setimage(e.target.files[0])}/>
             <label htmlFor="hide" className='text-white mx-8 font-semibold flex gap-2 items-center cursor-pointer'>
                <BiSolidImageAdd size="2rem"/>
                add image
             </label>
            <button className='bg-orange-700 w-fit text-white py-2 px-4 rounded-lg absolute bottom-10 left-10'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Home