import React from 'react'
import Home from './components/Home/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App