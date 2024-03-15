import React from 'react'

const Register = ({loginbox}) => {
  return (
    <div className='login'>
    <div className='heading'>
        <h1>Iamsocial</h1>
        <p>Connect with friends and the world around you and on Iamsocial</p>
    </div>
    <div className="card">
        <form>
        <input type="text" placeholder='username' required/>
       <input type="email" placeholder='Email' required/>
       <input type="password" placeholder='Password' required/>
       <input type="password" placeholder='Confirm Password' required/>
       <button className='primary'>Sign Up</button>
        </form>
       <button className='secondary' onClick={()=>loginbox()}>Login to Account</button>
    </div>
 </div>
  )
}

export default Register