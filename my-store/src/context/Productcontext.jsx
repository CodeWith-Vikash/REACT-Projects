import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import Data from '../components/Data'
import { CartContext } from './Cartcontext'

export const Appcontext=createContext()

export const AppProvider=({children})=>{
    const {getprodata}=useContext(CartContext)
    const [singledata, setsingledata] = useState([])
    // console.log(Data);
    const getsingledata = (id) => {
        const filteredData = Data.filter((item) => item.id === id);
      
        // Add "quantity" with value 1 to each object in filteredData
        const dataWithQuantity = filteredData.map((item) => ({
          ...item,
          quantity: 1,
        }));
      
        getprodata(dataWithQuantity)
        setsingledata(dataWithQuantity);
        localStorage.setItem("productdata",JSON.stringify(dataWithQuantity))
      };
      

    return <Appcontext.Provider value={{singledata,getsingledata}}>{children}</Appcontext.Provider>
}
