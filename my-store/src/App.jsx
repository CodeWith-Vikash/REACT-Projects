import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Products from './components/Productspage'
import Layout from './components/Layout'
import SingleProd from './components/SingleProd'

const App = () => {
  return <BrowserRouter>
       <Routes>
       <Route path='/' element={<Layout/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/singleprod' element={<SingleProd/>}/>
     </Route>
  </Routes>
</BrowserRouter>
}

export default App