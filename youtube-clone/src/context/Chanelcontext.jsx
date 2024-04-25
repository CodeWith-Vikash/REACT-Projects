import { createContext, useContext, useEffect, useState } from "react";
import { Appcontext } from "./Vidcontext";


export const Datacontext=createContext()


export const ChanelProvider=({children})=>{
    const apikey='AIzaSyCxs6VyMGzx-ioube33x0F4JctyBfjf9Fg'
    const {singledata}=useContext(Appcontext)
    const [chaneldata, setchaneldata] = useState({})
    const [comments, setcomments] = useState([])
    const [relatedvid, setrelatedvid] = useState({})
    const [imgarr, setimgarr] = useState([])
    let chanelid=JSON.parse(localStorage.getItem("chanelid")).id
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
    const fetchRelatedVideos=async ()=>{
        let categoryid=JSON.parse(localStorage.getItem("chanelid")).category
         try{
            const videoResponse=await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&videoCategoryId=${categoryid}&regionCode=IN&key=${apikey}
         `)
         let data=await videoResponse.json()
        //  console.log(data.items)
         setrelatedvid(data.items)
        }catch(err){
            console.log(err);
         }
    }
    useEffect(()=>{
        fetchChaneldata()
        fetchcomments()
        fetchRelatedVideos()
    },[singledata])
    return <Datacontext.Provider value={{chaneldata,fetchChaneldata,comments,relatedvid,imgarr,setimgarr}}>{children}</Datacontext.Provider>
}