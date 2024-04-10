import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../Firebase";



export const AppContext=createContext()

export const Contextprovider=({children})=>{
    const [currentuser, setcurrentuser] = useState()
    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(user)=>{
            setcurrentuser(user)
            console.log(user);
        })
        return ()=>{
            unsub()
        }
    },[])
     return <AppContext.Provider value={{currentuser}}>
        {children}
     </AppContext.Provider>
}