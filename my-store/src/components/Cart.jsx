import React, { useContext, useState } from 'react'
import Cartitem from './Cartitem';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import { CartContext } from '../context/Cartcontext';

const Cart = () => {
  const {cart,clearcart}=useContext(CartContext)
  const [cartitems, setcartitems] = useState(cart)
  return (
    <>
        <Navbar/>
        {cart.length==0?<div className='cartmessage'>No items in cart</div>:
          <div className='cart'>
            {cart.map((item)=>{
               return <Cartitem name={item.productName} price={item.discountedPrice} image={item.image} quantity={item.quantity} id={item.id} cart={cartitems}/>
            })}
          <div className="buttons">
            <NavLink to="/products"><button>continue shopping</button></NavLink>
            <button style={{backgroundColor:"red"}} onClick={clearcart}>Clear cart</button>
          </div>
          <div className="total">
            <p>sub total: 1000$</p>
            <p>Shipping fee : 50$</p>
            <hr />
            <span>Total : 1050$</span>
          </div>
        </div>
        }
        <Footer/>
    </>
  )
}

export default Cart