import React, { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const AppContext=createContext()

const Context = ({children}) => {
    const [issidebar, setissidebar] = useState(false)
    const [ismodal, setismodal] = useState(false)

    const openSidebar=()=>{
       setissidebar(true)
    }
    const closeSidebar=()=>{
       setissidebar(false)
    }
    const openModal=()=>{
       setismodal(true)
    }
    const closeModal=()=>{
       setismodal(false)
    }
    
  return  <AppContext.Provider value={{issidebar,openSidebar,closeSidebar,openModal,closeModal,ismodal}}>
            {children}
         </AppContext.Provider>
}


// custom hook
export const useApp=()=>{
  return useContext(AppContext)
}

export default Context