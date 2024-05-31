import React, { useRef, useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { RiEyeCloseFill } from "react-icons/ri";
import { RxEyeOpen } from "react-icons/rx";

const Signup = () => {
  const [isopen, setisopen] = useState(false)
  const passwordref=useRef(null)
  const toggleye=()=>{
    setisopen(!isopen)
    if(passwordref.current.getAttribute('type')=='password'){
       passwordref.current.setAttribute('type','text')
      }else{
      passwordref.current.setAttribute('type','password')
    }
  }
  return (
    <div className="h-screen bg-zinc-800 flex justify-center items-center">
      <div className="w-[300px] h-fit bg-white text-black rounded-lg p-4 flex flex-col items-center gap-4">
        <img src="/logo.png" alt="" className="w-16" />
      <form className="flex flex-col gap-3">
        <input type="text" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Username"/>
        <input type="email" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Email"/>
        <div className="relative">
        <input type="password" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Password" ref={passwordref}/>
        {isopen? <RxEyeOpen  className="absolute top-3 right-3 cursor-pointer"size="1.3rem" onClick={toggleye}/> : <RiEyeCloseFill className="absolute top-3 right-3 cursor-pointer"size="1.3rem" onClick={toggleye}/>}
        </div>

        <input type="file" id="file" className="hidden"/>
        <label htmlFor="file" className="flex items-center gap-2">
          <BiSolidImageAdd size="1.7rem"/>
          <b>add an avatar</b>
        </label>
        <button className="bg-black text-white font-semibold py-1 px-2 rounded">Register</button>
        <p>you already have an account ? <NavLink to="/login">
        <b>Login</b>
          </NavLink></p>
      </form>
      </div>
    </div>
  );
};

export default Signup;
