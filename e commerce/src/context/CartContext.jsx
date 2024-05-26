import { createContext, useState, useEffect } from "react";
import {toast} from 'react-toastify'

export const CartContext = createContext();

const getLocalStorage = () => {
  let localCart = localStorage.getItem('indicart');
  return localCart ? JSON.parse(localCart) : [];
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem('indicart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, quantity) => {
    item.count = quantity;
    setCart(prevCart => {
      const newCart = [...prevCart, item];
      return newCart;
    });
    toast.success('item added to cart')
  };

  const removeFromCart = (title) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.title !== title);
      return newCart;
    });
    toast.warning('item removed from cart')
  };

  const updateQuantity = (title, quantity) => {
    setCart(prevCart => {
      const newCart = prevCart.map(item => 
        item.title === title ? { ...item, count: quantity } : item
      );
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity,setCart }}>
      {children}
    </CartContext.Provider>
  );
};
