import { createContext, useState, useEffect } from "react";

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
  };

  const removeFromCart = (title) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.title !== title);
      return newCart;
    });
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
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
