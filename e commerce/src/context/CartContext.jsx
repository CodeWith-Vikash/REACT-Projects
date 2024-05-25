import { createContext, useState } from "react";
import { json } from "react-router-dom";


export const CartContext=createContext()


export const CartProvider=({children})=>{
    const [cart, setcart] = useState([])
    const addToCart=(item,quantity)=>{
        item.count=quantity
        setcart([...cart,item])
        localStorage.setItem('indicart',JSON.stringify([...cart,item]))
    }
    const removeFromCart=(title)=>{
        let newcart=cart.filter((item)=> item.title!=title)
        setcart(newcart)
        localStorage.setItem('indicart',JSON.stringify(newcart))
    }

    return <CartContext.Provider value={{cart,addToCart,removeFromCart}}>{children}</CartContext.Provider>
}