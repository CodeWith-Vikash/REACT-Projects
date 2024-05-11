import React, { useEffect, useState } from 'react'
import './Style.scss'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../Hooks/useFetch'
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyload/img'
import ContentWrapper from '../../../components/contentWrapper/Wrapper'

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
    const handleSearch=()=>{
        if(query!=" " && query!=""){
            navigate(`/search/${query}`)
        }
    }
    // console.log(data);
    useEffect(() => {
        if (data && data.results && data.results.length > 0) {
            let random = Math.floor(Math.random() * data.results.length);
            let bg = url.backdrop + (data.results[random]?.backdrop_path || '');
            setbackground(bg);
        }
    }, [data]);
    
  return (
    <div className="heropage">
        {!loading && 
            <img src={background}/>
        }
        <div className="opacity"></div>
        <ContentWrapper>
         <div className="wrapper">
         <div className="herocontent">
            <div className="title">
                Welcome.
            </div>
            <div className="subtitle">
                Explore popular movies and tv shows absolutely free of cost
            </div>
            <div className="search-section">
                <input type="text" placeholder='search tvshows and movies'
                 value={query}
                 onChange={(e)=> setquery(e.target.value)}
                 onKeyDown={handlekeydown}
                />
                <button onClick={handleSearch}>search</button>
            </div>
        </div>
         </div>
        </ContentWrapper>
    </div>
  )
}

export default Hero