import React from 'react'


const Login = ({loginbox,loginfun}) => {
  return (
    <div className='login'>
       <div className='heading'>
           <h1>Iamsocial</h1>
           <p>Connect with friends and the world around you and on Iamsocial</p>
       </div>
       <div className="card">
        <form>
        <input type="text" placeholder='username' required/>
          <input type="password" placeholder='Password' required/>
          <button className='primary' onClick={loginfun}>Login</button>
        </form>
          <span>Forget password</span>
          <button className='secondary' onClick={()=>loginbox()}>Create a New Account</button>
       </div>
    </div>
  )
}

export default Login