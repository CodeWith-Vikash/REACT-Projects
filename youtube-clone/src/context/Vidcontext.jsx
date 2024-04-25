import { createContext } from "react";
import React, { useEffect,useState } from 'react';
import axios from 'axios';


export const Appcontext=createContext()

export const ContextProvider=({children})=>{
    const apikey='AIzaSyCxs6VyMGzx-ioube33x0F4JctyBfjf9Fg'
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
        //  console.log(response.data.items)
         setVideos(response.data.items);
       } catch (error) {
         console.error('Error fetching videos:', error);
       }
     };
 
     fetchPopularVideos();

     
   }, [countryCode,categoryId]);

     const convertnumbers=(num)=>{
         if(num>=1000){
            if(num>=1000000){
               return (Math.floor(num/1000000)+"M")
            }

            return (Math.floor(num/1000)+"K")
         }
         return num
     }

     function calculateTimeGap(dateString) {
      const pastDate = new Date(dateString);
      const currentDate = new Date();
  
      // Calculate the time difference in milliseconds
      const timeDifference = Math.abs(currentDate - pastDate);
  
      // Calculate years
      const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
  
      // Calculate months
      const months = Math.floor((timeDifference / (1000 * 60 * 60 * 24 * 30.44)) % 12);
  
      // Calculate days
      const days = Math.floor((timeDifference / (1000 * 60 * 60 * 24)) % 30.44);
  
      // Calculate hours
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  
      // Calculate seconds
      const seconds = Math.floor((timeDifference / 1000) % 60);
  
      // Check if the time gap is greater than or equal to 1 year
      if (years >= 1) {
          return `${years} years`;
      } 
      // Check if the time gap is greater than or equal to 1 month
      else if (months >= 1) {
          return `${months} months`;
      } 
      // Check if the time gap is greater than or equal to 1 day
      else if (days >= 1) {
          return `${days} days`;
      } 
      // Check if the time gap is greater than or equal to 1 hour
      else if (hours >= 1) {
          return `${hours} hours`;
      } 
      // If the time gap is less than an hour, display in terms of seconds
      else {
          return `${seconds} seconds`;
      }
  }

    return <Appcontext.Provider value={{videos,setcategoryId,singledata,setsingledata,convertnumbers,calculateTimeGap}}>{children}</Appcontext.Provider>
}