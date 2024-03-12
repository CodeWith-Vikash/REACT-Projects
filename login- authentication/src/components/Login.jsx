import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { SiMinutemailer } from "react-icons/si";
import { RiLockPasswordFill } from "react-icons/ri";



const Login = ({handlesubmit}) => {
  return (
    <div className='card'>
        <header>
            <h3>@codewithvikash</h3>
        </header>
        <div className="option" onClick={handlesubmit}>
        <FcGoogle />
        <p>singn in with google</p>
        </div>
        <p>or</p>
        <form onSubmit={handlesubmit}>
        <div className="option email">
             <div><SiMinutemailer className='icon'/></div>
             <input type="email" placeholder='yours@gmail.com' required/>
        </div>
        <div className="option">
           <div><RiLockPasswordFill className='icon'/></div>
           <input type="password" placeholder='your password' required/>
        </div>
        <p>Forget password</p>
        <button>Login</button>
        </form>
    </div>
  )
}

export default Login