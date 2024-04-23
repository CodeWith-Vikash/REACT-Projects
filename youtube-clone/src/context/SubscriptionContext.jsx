import {useContext,createContext, useState} from 'react'

export const SubContext=createContext()

export const SubProvider=({children})=>{
    const [subcount, setsubcount] = useState([])
    return <SubContext.Provider value={{subcount,setsubcount}}>{children}</SubContext.Provider>
}
