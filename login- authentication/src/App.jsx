import React, { useState } from 'react'
import Login from './components/Login'
import Logout from './components/Logout'

const App = () => {
  const [islogin, setislogin] = useState(true)
  const handlesubmit=()=>{
     setislogin(!islogin)
  }
  return (
    <div className='container'>
      {islogin?<Login handlesubmit={handlesubmit}/>:<Logout handlesubmit={handlesubmit}/>}
    </div>
  )
}

export default App