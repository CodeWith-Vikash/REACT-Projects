import React from 'react'
import { MdOutlineLogoDev } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";


const Login = () => {
  return (
    <div className='login'>
      <div className="loginel">
      <MdOutlineLogoDev size="3rem" style={{color:"orangered"}}/>
      <form >
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <b className='forget'>forget password ?</b>
        <button>continue</button>
        <p>Don,t have an account ? <span className='forget'>sign up</span></p>
      </form>
        <p>-------------- Or --------------</p>
        <div className="social-login">
          <div className="social">
            <FcGoogle size="1.3rem"/>
            <span>continue with google</span>
          </div>
          <div className="social">
            <FaGithub size="1.3rem" style={{color:"black"}}/>
            <span>continue with Github</span>
          </div>
          <div className="social">
            <BsLinkedin size="1.3rem" style={{color:"blue"}}/>
            <span>continue with Linkedin</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login