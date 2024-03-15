import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

const App = () => {
  const [islogin, setislogin] = useState(false)
  const loginbox=()=>{
       setislogin(!islogin)
  }
  return (
    <div className='container'>
      {/* {islogin?<Login loginbox={loginbox}/>:<Register loginbox={loginbox}/>} */}
      <Navbar/>
      <Content/>
    </div>
  )
}

export default App