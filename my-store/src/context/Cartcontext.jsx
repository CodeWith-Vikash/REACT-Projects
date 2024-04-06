import React, { createContext, useContext, useEffect, useState } from 'react'

export const  CartContext=createContext()


export const Cartprovider=({children})=>{
    const [prodata, setprodata] = useState()
    const [cart, setcart] = useState([])
    const getprodata=(data)=>{
        setprodata(data)
   }
   const addtocart = (quantity, cartitems) => {
    const updatedCart = [...cart, {...prodata[0], quantity: quantity}]
    localStorage.setItem("mystorecart", JSON.stringify(updatedCart))
    setcart(updatedCart)
}

const removefromcart = (cartitems, id) => {
    const updatedCart = cartitems.filter((item) => item.id !== id);
    setcart(updatedCart);
}

     const clearcart=(setcartitems)=>{
        localStorage.removeItem("mystorecart")
        setcartitems([])
    }
    useEffect(()=>{
       if(cart.length>0){
        localStorage.setItem("mystorecart", JSON.stringify(cart));
       }
     },[cart,removefromcart])
    return <CartContext.Provider value={{cart,addtocart,getprodata,removefromcart,clearcart}}>{children}</CartContext.Provider>
}