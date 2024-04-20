import { createContext } from "react";
import React, { useEffect,useState } from 'react';
import axios from 'axios';


export const Appcontext=createContext()

export const ContextProvider=({children})=>{
    const apikey='AIzaSyAyxmfhPMPRHvTf2HEimPkhZNFvztzL5qo'
  const chanelid='UC-kKbeMavrjlf3zJOo3QS7w'
   let url='https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC-kKbeMavrjlf3zJOo3QS7w&maxResults=25&key=AIzaSyAyxmfhPMPRHvTf2HEimPkhZNFvztzL5qo'
   const [videos, setVideos] = useState([]);
   const countryCode = 'IN'; // Country code for India
   let categoryId=2
 
   useEffect(() => {
     const fetchPopularVideos = async () => {
       try {
         const response = await axios.get(
           'https://www.googleapis.com/youtube/v3/videos',
           {
             params: {
               key: 'AIzaSyAyxmfhPMPRHvTf2HEimPkhZNFvztzL5qo',
               part: 'snippet',
               chart: 'mostPopular',
               maxResults: 10, // or however many videos you want
               regionCode: countryCode,
               videoCategoryId: categoryId
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
    return <Appcontext.Provider value={{videos}}>{children}</Appcontext.Provider>
}