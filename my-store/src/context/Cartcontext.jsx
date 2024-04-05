import React, { createContext, useContext, useState } from 'react'

export const  CartContext=createContext()


export const Cartprovider=({children})=>{
    const [prodata, setprodata] = useState()
    const [cart, setcart] = useState([])
    const getprodata=(data)=>{
        setprodata(data)
   }
    const addtocart=(quantity)=>{
        setcart((pre)=>{
            return [...pre,{...prodata[0],quantity:quantity}]
        })
    }
     const removefromcart=(cartitems,id)=>{
        setcart(cartitems.filter((item)=>item.id!=id))
     }
     const clearcart=()=>{
        setcart([])
     }
    return <CartContext.Provider value={{cart,addtocart,getprodata,removefromcart,clearcart}}>{children}</CartContext.Provider>
}