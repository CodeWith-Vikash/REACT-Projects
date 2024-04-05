import React, { useContext, useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from '../context/Cartcontext';

const Cartitem = ({name,price,image,quantity,id,cart}) => {
  const {removefromcart}=useContext(CartContext)
  const [productquantity, setproductquantity] = useState(quantity)
  const increasequantity=()=>{
    setproductquantity(productquantity+1)
}
const decresequantity=()=>{
  if(productquantity>1){
    setproductquantity(productquantity-1)
  }
}
  return (
    <div className="cartitem">
        <div className="headings">
          <span>Item</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
          <span>Remove</span>
        </div>
        <hr />
        <div className="cart-content">
          <div className="item">
            <img src={image}/>
            <span>{name}</span>
          </div>
          <span>{price}$</span>
          <div className="counter">
          <span onClick={decresequantity}>-</span>
          <span>{productquantity}</span>
          <span onClick={increasequantity}>+</span>
         </div>
         <span>{price*productquantity}$</span>
         <span className='removeicon' onClick={()=>removefromcart(cart,id)}><FaTrashAlt style={{color:"red",cursor:"pointer"}}/></span>
        </div>
        <hr />
      </div>
  )
}

export default Cartitem