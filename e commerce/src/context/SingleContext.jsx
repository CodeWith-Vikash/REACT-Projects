import { useState } from 'react'
import  { createContext } from 'react'


export const SingleContext=createContext()

export const SingleProvider=({children})=>{
    const [selectedprod, setselectedprod] = useState({})

   return  <SingleContext.Provider value={{selectedprod,setselectedprod}}>
        {
            children
        }
    </SingleContext.Provider>
}