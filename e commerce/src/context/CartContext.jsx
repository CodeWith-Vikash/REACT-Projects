import { createContext, useState } from "react";


export const CartContext=createContext()


export const CartProvider=({children})=>{
    const [cart, setcart] = useState([])
    const addToCart=(item,quantity)=>{
        item.count=quantity
        setcart([...cart,item])
    }
    const removeFromCart=(title)=>{
        let newcart=cart.filter((item)=> item.title!=title)
        setcart(newcart)
    }

    return <CartContext.Provider value={{cart,addToCart,removeFromCart}}>{children}</CartContext.Provider>
}