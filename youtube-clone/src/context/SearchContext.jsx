import {useContext,createContext, useState, useEffect} from 'react'

export const SearchContext=createContext()

export const SearchProvider=({children})=>{
    const [inputval, setinputval] = useState("")
    const [searchdata, setsearchdata] = useState([])
    const [issearch, setissearch] = useState(false)
    const [isloading, setisloading] = useState(false)
    const [iserror, setiserror] = useState(false)
    const getSerachData=async ()=>{
        setissearch(false)
        setisloading(!true)
        try {
            const apikey='AIzaSyCxs6VyMGzx-ioube33x0F4JctyBfjf9Fg'
            const response= await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputval}&maxResults=100&key=${apikey}
            `)
            let data=await response.json()
            if(data.error){
                setiserror(true)
            }
            console.log(data)
            setsearchdata(data.items)
            setisloading(false)
            setissearch(true)
    } catch (error) {
          setiserror(true)
           console.log(error);
       }
    }
    useEffect(()=>{
        // getSerachData()
    },[])
    return <SearchContext.Provider value={{searchdata,issearch,isloading,setinputval,inputval,getSerachData,iserror}}>{children}</SearchContext.Provider>
}
