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
    console.log(updatedCart);
}

const removefromcart = (cartitems, id) => {
    console.log("Removing item with ID:", id);
    console.log("Current cart:", cartitems); // Log current cart before removal

    const updatedCart = cartitems.filter((item) => item.id !== id);
    console.log("Updated cart:", updatedCart); // Log updated cart after removal

    setcart(updatedCart); // Update cart state
    localStorage.setItem("mystorecart", JSON.stringify(updatedCart)); // Update local storage

    console.log("Cart after removal:", cart); // Log current cart after state update
}


     const clearcart=(setcartitems)=>{
        localStorage.removeItem("mystorecart")
        setcartitems([])
        setcart([])
    }
    // useEffect(()=>{
    //    if(cart.length>0){
    //     localStorage.setItem("mystorecart", JSON.stringify(cart));
    //    }
    //  },[cart,removefromcart])
    return <CartContext.Provider value={{cart,addtocart,getprodata,removefromcart,clearcart,setcart}}>{children}</CartContext.Provider>
}