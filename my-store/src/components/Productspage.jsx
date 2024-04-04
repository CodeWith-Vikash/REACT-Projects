import React from 'react'
import Data from './Data'
import Product from './Product'
import Navbar from './Navbar'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const Products = () => {
  return (
    <>
        <Navbar/>
    <div className='productspage'>
    <div className="pronav">
    <input type="text" placeholder='search products'/>
     <select>
       <option value="higher to lower">higher to lower</option>
       <option value="lower to higher">lower to higher</option>
     </select>
    </div>
    <div className="products">
      {Data.map((item)=>{
         return <NavLink to="/singleprod"><Product name={item.productName} price={item.price} img={item.image} id={item.id} key={item.productName}/></NavLink>
      })}
    </div>
   </div>
    <Footer/>
    </>
  )
}

export default Products