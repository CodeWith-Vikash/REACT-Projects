import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './features/components/Home'
import Profiles from './features/components/Profiles'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profiles/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App