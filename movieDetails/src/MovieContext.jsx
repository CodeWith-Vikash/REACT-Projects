import { createContext, useContext, useEffect, useState } from "react";


export const Appcontext=createContext()


export const ContextProvider=({children})=>{
    const [moviedata, setmoviedata] = useState([])
    const [title, settitle] = useState("space")
    const [singlemovie, setsinglemovie] = useState({})
    const [isloading, setisloading] = useState(false)
    const [iserror, setiserror] = useState(false)
    const [errormessage, seterrormessage] = useState("")
    const apiurl='https://www.omdbapi.com?apikey=9e22ef45'
    const fetchdata=async()=>{
        setisloading(true)
        setiserror(false)
        let response=await fetch(`${apiurl}&s=${title}`)
        let data=await response.json()
        console.log(data);
        if(data.Response=='False'){
            setiserror(true)
            seterrormessage(data.Error)
            setisloading(false)
        }else{
            setmoviedata(data.Search)
            setisloading(false)
        }
    }
    const getsinglemovie=(movie)=>{
        setsinglemovie(movie)
        console.log(movie);
    }
    useEffect(()=>{
        let timeout=setTimeout(() => {
            fetchdata()
        },2000);
        // useEffect only returns a cleanup function
        return ()=> clearTimeout(timeout)
    },[title])
    return <Appcontext.Provider value={{moviedata,settitle,fetchdata,singlemovie,getsinglemovie,title,isloading,iserror,errormessage}}>{children}</Appcontext.Provider>
}


export const useMovie=()=>{
    return useContext(Appcontext)
}