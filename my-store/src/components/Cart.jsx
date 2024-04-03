import React from 'react'
import Data from './Data'
import Cartitem from './Cartitem';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'

const Cart = () => {
  const {productName,price,discountedPrice,image,about}=Data[0]
  return (
    <>
        <Navbar/>
        <div className='cart'>
      <Cartitem name={productName} price={discountedPrice} image={image}/>
      <Cartitem name={productName} price={discountedPrice} image={image}/>
      <Cartitem name={productName} price={discountedPrice} image={image}/>
      <div className="buttons">
        <NavLink to="/products"><button>continue shopping</button></NavLink>
        <button style={{backgroundColor:"red"}}>Clear cart</button>
      </div>
      <div className="total">
        <p>sub total: 1000$</p>
        <p>Shipping fee : 50$</p>
        <hr />
        <span>Total : 1050$</span>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cart