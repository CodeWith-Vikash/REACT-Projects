import { createContext, useContext, useEffect, useState } from "react";
import { Appcontext } from "./Vidcontext";


export const Datacontext=createContext()


export const ChanelProvider=({children})=>{
    const apikey='AIzaSyAyxmfhPMPRHvTf2HEimPkhZNFvztzL5qo'
    const {singledata}=useContext(Appcontext)
    const [chaneldata, setchaneldata] = useState({})
    const [comments, setcomments] = useState([])
    let chanelid=localStorage.getItem("chanelid")
    const fetchChaneldata=async ()=>{
         try {
           const response=await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${chanelid}&key=${apikey}
         `
         )
           let data=await response.json()
           setchaneldata(data)
        //    console.log(data);
         } catch (error) {
             console.log("chanel error"+error);
         }
 
    }
    const fetchcomments=async ()=>{
        const commentsResponse = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&allThreadsRelatedToChannelId=${chanelid}&maxResults=50&key=${apikey}
        `);
        let commentsdata=await commentsResponse.json()
        // console.log(commentsdata)
        setcomments(commentsdata.items)
    
    }
    useEffect(()=>{
        fetchChaneldata()
        fetchcomments()
    },[singledata])
    return <Datacontext.Provider value={{chaneldata,fetchChaneldata,comments}}>{children}</Datacontext.Provider>
}