import { createContext } from "react";
import React, { useEffect,useState } from 'react';
import axios from 'axios';


export const Appcontext=createContext()

export const ContextProvider=({children})=>{
    const apikey='AIzaSyAyxmfhPMPRHvTf2HEimPkhZNFvztzL5qo'
  const chanelid='UC-kKbeMavrjlf3zJOo3QS7w'   
   const [videos, setVideos] = useState([]);
   const [singledata, setsingledata] = useState({})
   const countryCode = 'IN'; // Country code for India
   const [categoryId, setcategoryId] = useState(0)
 
   useEffect(() => {
     const fetchPopularVideos = async () => {
       try {
         const response = await axios.get(
           `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&videoCategoryId=${categoryId}&regionCode=${countryCode}&key=${apikey}`,
           {
             params: {
               maxResults: 1000, // or however many vi
             }
           }
         );
         console.log(response)
         setVideos(response.data.items);
       } catch (error) {
         console.error('Error fetching videos:', error);
       }
     };
 
     fetchPopularVideos();
   }, [countryCode,categoryId]);
    return <Appcontext.Provider value={{videos,setcategoryId,singledata,setsingledata}}>{children}</Appcontext.Provider>
}