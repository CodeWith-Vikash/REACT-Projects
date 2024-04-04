import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Products from './components/Productspage'
import SingleProd from './components/SingleProd'
import Login from './components/Login'
import Errorpage from './components/Errorpage'

const App = () => {
  return <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/singleprod' element={<SingleProd/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Errorpage/>}/>
  </Routes>
</BrowserRouter>
}

export default App