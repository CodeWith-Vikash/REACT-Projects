import { createContext, useContext, useEffect, useState } from "react";
import { Appcontext } from "./Vidcontext";


export const Datacontext=createContext()


export const ChanelProvider=({children})=>{
    const apikey='AIzaSyAyxmfhPMPRHvTf2HEimPkhZNFvztzL5qo'
    const {singledata}=useContext(Appcontext)
    const [chaneldata, setchaneldata] = useState({})
    const fetchChaneldata=async ()=>{
        console.log(singledata);
         try {
           const response=await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${singledata.chanelid}&key=${apikey}`)
           let data=await response.json()
           setchaneldata(data)
           console.log(data);
         } catch (error) {
             console.log("chanel error"+error);
         }
 
    }
    // useEffect(()=>{
    //     // fetchChaneldata()
    // },[singledata])
    return <Datacontext.Provider value={{chaneldata,fetchChaneldata}}>{children}</Datacontext.Provider>
}