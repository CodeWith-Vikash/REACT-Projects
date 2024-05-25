import React, { useContext, useEffect, useState } from 'react';
import { FaTrashCan } from "react-icons/fa6";
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    setCounts(cart.map(item => item.count));
  }, [cart]);

  const incrementCount = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
    updateQuantity(cart[index].title, newCounts[index]);
  };

  const decrementCount = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
      setCounts(newCounts);
      updateQuantity(cart[index].title, newCounts[index]);
    }
  };

  const calculatePrice = (item, count) => {
    const price = String(item.price).startsWith('$') ? String(item.price).substring(1) : item.price;
    return Number(price) * count;
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item, index) => total + calculatePrice(item, counts[index]), 0);
  };

  return (
    <div className='min-h-screen py-10 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center'>
      <section className='flex flex-col items-center gap-3 max-h-[80vh] overflow-auto'>
        {cart.map((item, index) => (
          <div key={item.title} className='w-[300px] flex items-center border-2 justify-between px-2'>
            <img src={item.image} alt="" className='h-[50px]' />
            <div className="counter font-semibold text-sm">
              <span className='px-2 py-[3px] border-black border-2' onClick={() => incrementCount(index)}>+</span>
              <span className='px-2 py-[3px] border-black border-2'>{counts[index]}</span>
              <span className='px-2 py-[3px] border-black border-2' onClick={() => decrementCount(index)}>-</span>
            </div>
            <b>${calculatePrice(item, counts[index]).toFixed(2)}</b>
            <FaTrashCan color='red' size="1rem" onClick={() => removeFromCart(item.title)} />
          </div>
        ))}
      </section>
      {cart.length > 0 ? (
        <section className='w-[300px] border-2 flex flex-col p-4 gap-2'>
          <p>Subtotal Price: <b>${calculateTotalPrice().toFixed(2)}</b></p>
          <p>Shipping Fees: <b>$100</b></p>
          <hr />
          <p>Total Price: <b>${(calculateTotalPrice() + 100).toFixed(2)}</b></p>
          <button className='text-white bg-gray-900 px-2 py-1 rounded font-semibold'>Checkout</button>
        </section>
      ) : (
        <div className='text-center'>
          <h3 className='font-bold text-xl'>Cart is empty</h3>
          <NavLink to="/">
            <button className='border-2 border-gray-900 text-gray-900 px-2 py-1 rounded w-fit hover:bg-gray-900 hover:text-white font-semibold mt-5'>Go to homepage</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
