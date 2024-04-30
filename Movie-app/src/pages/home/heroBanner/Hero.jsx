import React, { useEffect, useState } from 'react'
import './Style.scss'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../Hooks/useFetch'
import { useSelector } from 'react-redux'

const Hero = () => {
    const [query, setquery] = useState("")
    const [background, setbackground] = useState("")
    const navigate=useNavigate()
    const {data,loading} =useFetch('/movie/upcoming')
    const {url}=useSelector((state)=>state.home)
    const handlekeydown=(e)=>{
        if(e.key=="Enter" && query.length>0){
            navigate(`/search/${query}`)
        }
    }
    // console.log(data);
    useEffect(()=>{
        let random=Math.floor(Math.random()*20)
        let bg=url.backdrop+data?.results[random]?.backdrop_path;
        setbackground(bg)
    },[data])
  return (
    <div className="heropage">
        <div className="herocontent">
            <div className="title">
                Welcome.
            </div>
            <div className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, fugiat.
            </div>
            <div className="search-section">
                <input type="text" placeholder='search tvshows and movies'
                 value={query}
                 onChange={(e)=> setquery(e.target.value)}
                 onKeyDown={handlekeydown}
                />
                <button>search</button>
            </div>
        </div>
    </div>
  )
}

export default Hero