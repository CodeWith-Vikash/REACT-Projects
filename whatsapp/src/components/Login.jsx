import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="h-screen bg-zinc-800 flex justify-center items-center">
      <div className="w-[300px] h-fit bg-white text-black rounded-lg p-4 flex flex-col items-center gap-4">
        <img src="/logo.png" alt="" className="w-16" />
      <form className="flex flex-col gap-3">
        <input type="email" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Email"/>
        <input type="password" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Password"/>
        <button className="bg-black text-white font-semibold py-1 px-2 rounded">Login</button>
        <p>you don't have an account ? <NavLink to="/signup">
        <b>signup</b>
          </NavLink></p>
      </form>
      </div>
    </div>
  )
}

export default Login