import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import About from './components/About/About'
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error from './components/Errorpage/Error'
import Singleprod from './components/singleprod/Singleprod'
import ScrollToTop from './Scrolltop'

const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search/:query' element={<Search/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:name' element={<Singleprod/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App