import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/orders/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Nopage from './pages/nopage/Nopage'
import Allproducts from './pages/allproducts/Allproducts'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/*" element={<Nopage/>} />
        <Route path="/products" element={<Allproducts/>} />
      </Routes>
    </Router>
  )
}

export default App