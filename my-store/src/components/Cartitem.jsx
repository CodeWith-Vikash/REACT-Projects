import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Cartitem = ({name,price,image}) => {
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
            <span>name</span>
          </div>
          <span>{price}$</span>
          <div className="counter">
          <span>-</span>
          <span>0</span>
          <span>+</span>
         </div>
         <span>12000$</span>
         <span className='removeicon'><FaTrashAlt style={{color:"red",cursor:"pointer"}}/></span>
        </div>
        <hr />
      </div>
  )
}

export default Cartitem