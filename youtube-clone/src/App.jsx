import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Singlevid from './components/Singlevid'
import axios from 'axios';

const App = () => {
  const url = 'https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=G33j5Qi4rE8';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '59a2f37d10msh5e0c2313caf714ep125022jsn34d1b7daea85',
      'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
    }
  };
  
  const fetchdata=async ()=>{
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      let data=response.json()
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <Navbar/>
      <button onClick={fetchdata}>fetchdata</button>
    </div>
  )
}

export default App