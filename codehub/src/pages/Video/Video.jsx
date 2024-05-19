import React, { useEffect, useState } from 'react'
import './Style.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { current } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const Video = () => {
  const {isdark}= useSelector((state)=> state.mainReducer.home)
  const [videos, setvideos] = useState([])
  const [activevideo, setactivevid] = useState([])
  const {id}=useParams()
  const apikey='AIzaSyCo6D2sWltB2LkmNzxQvO__OvX_2qZeRLU'
  const url =`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=${apikey}`
  const getvideos=()=>{
    axios.get(url).then((res)=>{
      // console.log(res.data);
      setvideos(res.data.items)
      setactivevid(res.data.items[0])
      // console.log(res.data.items[0]);
    })
  }

  useEffect(()=>{
    getvideos()
  },[id])
  return (
<div className={`video ${isdark?'dark':'light'}`}>
      {activevideo?.snippet && (
        <div className="wrapper">
          <div className="videosec">
          <iframe
          src={`https://www.youtube.com/embed/${activevideo.snippet.resourceId.videoId}?rel=0`}
          title={activevideo.snippet.title}
          frameBorder="0"
          allowFullScreen
        />
        <b>{activevideo.snippet.title}</b>
        </div>
        <div className="playlist">
          {videos.map((vid)=>{
            return <p key={vid.id} style={activevideo.snippet.title==vid.snippet.title?{backgroundColor:"var(--color)"}:null} onClick={()=> setactivevid(vid)}>{vid.snippet.title}</p>
          })}
        </div>
        </div>
      )}
      {!activevideo?.snippet && <p className='load'>Loading...</p>}
    </div>
  )
}

export default Video