import React from 'react'
import Movie from './component/Movie'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './component/Home'


const App = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/movie" element={<Movie/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App