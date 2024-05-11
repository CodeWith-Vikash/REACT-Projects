import React, { useEffect, useState } from 'react'
import './Style.scss'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Hero = () => {
    const [images, setimages] = useState([])
    const [number, setnumber] = useState(Math.floor(Math.random()*9))
    const [page, setpage] = useState(Math.floor(Math.random()*104)+1)
    const accessKey='PYtty4g9IUJoUZ-Otaom9rMmSQg6dpCFF3DbxYgIwcQ'
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=programming&client_id=${accessKey}`

    const {isdark} =useSelector((state)=> state.mainReducer.home)

    const getimage=()=>{
        try {
            axios.get(url).then((res)=>{
                console.log(res.data);
                setimages(res.data?.results)
            })
        } catch (error) {
            console.log(error);
        }
    }
    

useEffect(()=>{
    getimage()
},[])
  return (
    <div className='hero'>
        <img src={images[number]?.urls?.full}/>
        <div className="blur" style={isdark?{background:` linear-gradient(
        180deg,
        rgba(11, 22, 37, 0.1) 0%,
        rgb(11, 22, 37) 79.17%
    )
    `}:{background:`linear-gradient(
                  180deg,
                  rgba(255, 255, 255,0) 0%,
                   #ffffff 79.17%
              )`}}></div>
    </div>
  )
}

export default Hero