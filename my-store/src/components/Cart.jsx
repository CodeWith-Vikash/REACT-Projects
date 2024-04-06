import React, { useContext, useEffect, useState } from 'react'
import Cartitem from './Cartitem';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import { CartContext } from '../context/Cartcontext';

// const getlocalstorage=()=>{
//    let cart =JSON.parse(localStorage.getItem("mystorecart"))
//    if(cart){
//     return cart
//    }else{
//      return []
//    }
// }
const Cart = () => {
  const {cart,clearcart}=useContext(CartContext)
  const [cartitems, setcartitems] = useState([])
  const [subtotal, setsubtotal] = useState(0)
  const [shippingfee, setshippingfee] = useState(50)

  
  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("mystorecart"));
    if (localCart) {
      setcartitems(localCart);
    }
    
    // Calculate subtotal based on cart items
    const subtotal = localCart.reduce((acc, curr) => {
      return curr.discountedPrice * curr.quantity + acc;
    }, 0);
  
    setsubtotal(subtotal);
  }, [cart]);

  return (
    <>
        <Navbar/>
        {cartitems.length==0?<div className='cartmessage'>No items in cart</div>:
          <div className='cart'>
            {cartitems.map((item)=>{
               return <Cartitem name={item.productName} price={item.discountedPrice} image={item.image} quantity={item.quantity} id={item.id} cart={cartitems} key={item.id}/>
            })}
          <div className="buttons">
            <NavLink to="/products"><button>continue shopping</button></NavLink>
            <button style={{backgroundColor:"red"}} onClick={()=>clearcart(setcartitems)}>Clear cart</button>
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