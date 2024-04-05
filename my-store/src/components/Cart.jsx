import React, { useContext, useEffect, useState } from 'react'
import Cartitem from './Cartitem';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import { CartContext } from '../context/Cartcontext';

const Cart = () => {
  const {cart,clearcart}=useContext(CartContext)
  const [cartitems, setcartitems] = useState(cart)
  const [subtotal, setsubtotal] = useState(0)
  const [shippingfee, setshippingfee] = useState(50)

  const calculatesubtotal=()=>{
      setsubtotal(
        cart.reduce((acc,curr)=>{
          return curr.discountedPrice*curr.quantity+acc
        },0)
      )
  }

  useEffect(()=>{
    calculatesubtotal()
  },[cart])
  return (
    <>
        <Navbar/>
        {cart.length==0?<div className='cartmessage'>No items in cart</div>:
          <div className='cart'>
            {cart.map((item)=>{
               return <Cartitem name={item.productName} price={item.discountedPrice} image={item.image} quantity={item.quantity} id={item.id} cart={cart}/>
            })}
          <div className="buttons">
            <NavLink to="/products"><button>continue shopping</button></NavLink>
            <button style={{backgroundColor:"red"}} onClick={clearcart}>Clear cart</button>
          </div>
          <div className="total">
            <p>sub total: {subtotal}$</p>
            <p>Shipping fee : {shippingfee}$</p>
            <hr />
            <span>Total : {subtotal+shippingfee}$</span>
          </div>
        </div>
        }
        <Footer/>
    </>
  )
}

export default Cart