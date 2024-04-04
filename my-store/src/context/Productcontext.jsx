import React, { useState } from 'react'
import { createContext } from 'react'
import Data from '../components/Data'

export const Appcontext=createContext()

export const AppProvider=({children})=>{
    const [singledata, setsingledata] = useState([])
    // console.log(Data);
    const getsingledata=(id)=>{
        setsingledata(Data.filter((item)=> item.id ==id))
    }

    return <Appcontext.Provider value={{singledata,getsingledata}}>{children}</Appcontext.Provider>
}
