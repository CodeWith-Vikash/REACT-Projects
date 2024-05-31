import React from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { NavLink } from "react-router-dom";
// create an eye on password

const Signup = () => {
  return (
    <div className="h-screen bg-zinc-800 flex justify-center items-center">
      <div className="w-[300px] h-fit bg-white text-black rounded-lg p-4 flex flex-col items-center gap-4">
        <img src="/logo.png" alt="" className="w-16" />
      <form className="flex flex-col gap-3">
        <input type="text" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Username"/>
        <input type="email" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Email"/>
        <input type="password" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Password"/>
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
