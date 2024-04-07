import { createContext, useContext, useState } from "react";


export const Appcontext=createContext()


export const ContextProvider=({children})=>{
    const [moviedata, setmoviedata] = useState([])
    const [title, settitle] = useState("hacker")
    const apiurl='https://www.omdbapi.com?apikey=9e22ef45'
    const fetchdata=async()=>{
        let response=await fetch(`${apiurl}&s=${title}`)
        let data=await response.json()
        console.log(data);
        setmoviedata(data.Search)
    }
    return <Appcontext.Provider value={{moviedata,settitle,fetchdata}}>{children}</Appcontext.Provider>
}


export const useMovie=()=>{
    return useContext(Appcontext)
}