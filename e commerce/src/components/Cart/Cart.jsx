import React, { useContext, useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const {cart,removeFromCart} = useContext(CartContext)
  console.log(cart);
  return (
    <div className='min-h-screen py-10 flex flex-col items-center gap-6'>
       <section className='flex flex-col items-center gap-3'>
          {cart.map((item)=>{
            return <div className='w-[300px] flex items-center border-2 justify-between px-2'>
            <img src={item.image} alt="" className='h-[50px]'/>
            <div className="counter font-semibold text-sm">
              <span className='px-2 py-[3px] border-black border-2' >+</span>
              <span className='px-2 py-[3px] border-black border-2'></span>
              <span className='px-2 py-[3px] border-black border-2' >-</span>
            </div>
            <b>$788</b>
            <FaTrashCan color='red' size="1rem"/>
          </div>
          })}
       </section>
       <section className='w-[300px] border-2 flex flex-col p-4 gap-2'>
         <p>Subtotal Price: <b>$6979</b></p>
         <p>Shipping Fees: <b>$100</b></p>
         <hr />
         <p>Total Price: <b>$10000</b></p>
         <button className=' text-white bg-gray-900 px-2 py-1 rounded font-semibold'>Checkout</button>
       </section>
    </div>
  )
}

export default Cart