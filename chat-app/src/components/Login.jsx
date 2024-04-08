import React from 'react'

const Login = () => {
  return (
    <div className='bg-gray-900 h-screen flex justify-center items-center'>
        <form className=" bg-blue-600 p-4 rounded-lg">
            <input type="email" placeholder='Email'className='rounded-lg px-4 py-2 outline-none'/>
            <input type="password" placeholder='password'className='rounded-lg px-4 py-2 outline-none'/>
            <button className='bg-violet-800 text-white font-semibold px-4 py-2 rounded-lg w-fit'>Login</button>
            <p className='text-white'>you don't have an account?<span className='text-black'>signup</span></p>
        </form>
    </div>
  )
}

export default Login