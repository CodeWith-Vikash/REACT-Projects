import React from 'react'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import Input from './components/Form'
import Search from './components/Search'

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Input/>}/>
          <Route path='/search' element={<Search/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App