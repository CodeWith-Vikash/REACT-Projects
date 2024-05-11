import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import Courses from './pages/Courses/Courses'
import Docs from './pages/Docs/Docs'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/docs" element={<Docs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App