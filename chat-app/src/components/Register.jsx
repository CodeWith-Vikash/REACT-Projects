import React from 'react'
import { BiSolidImageAdd } from "react-icons/bi";
import { Form } from 'react-router-dom';


const Register = () => {
  return (
    <div className='bg-gray-900 h-screen flex justify-center items-center'>
        <form className=" bg-blue-600 p-4 rounded-lg">
            <input type="text" placeholder='Username'className='rounded-lg px-4 py-2 outline-none'/>
            <input type="email" placeholder='Email'className='rounded-lg px-4 py-2 outline-none'/>
            <input type="password" placeholder='password'className='rounded-lg px-4 py-2 outline-none'/>
            <input type="file" id='file'style={{display:"none"}}/>
            <label htmlFor="file" className='text-white font-semibold flex gap-2 cursor-pointer'>
                <BiSolidImageAdd size="2rem"/>
                <p>Add an avtar</p>
            </label>
            <button className='bg-violet-800 text-white font-semibold px-4 py-2 rounded-lg w-fit'>Register</button>
            <p className='text-white'>Do you have an account?<span className='text-black'> login</span></p>
        </form>
    </div>
  )
}

export default Register