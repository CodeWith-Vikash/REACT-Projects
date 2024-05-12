import React, { useEffect, useState } from 'react'
import './Style.scss'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Hero = () => {
    const [images, setimages] = useState([])
    const [number, setnumber] = useState(Math.floor(Math.random()*9))
    const [page, setpage] = useState(Math.floor(Math.random()*104)+1)
    const [careerIndex, setCareerIndex] = useState(0)
    const [characterIndex, setCharacterIndex] = useState(0)
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
    
    const careers = ['web development','App development','c','c++','java','DSA','Python','Machine Learning']

    useEffect(() => {
        getimage()
        const intervalId = setInterval(() => {
            if (characterIndex < careers[careerIndex].length) {
                setCharacterIndex(prevIndex => prevIndex + 1);
            } else {
                if (careerIndex < careers.length - 1) {
                    setCareerIndex(prevIndex => prevIndex + 1);
                } else {
                    setCareerIndex(0);
                }
                setCharacterIndex(0);
            }
        }, 400);

        return () => clearInterval(intervalId)
    }, [careerIndex, characterIndex])


  return (
    <div className='hero'>
        <div className="banner" style={{backgroundImage:`url(${images[number]?.urls?.full})`}}>
            <div className="content" style={isdark?{backgroundColor: 'rgb(0, 0, 0,0.5)'}:{backgroundColor: 'rgb(132, 132, 132,0.5)'}}>
                <p className='title'>welcome to <span>CodeWithVikash</span></p>
                <p className="subtitle">Learn <span>{careers[careerIndex].slice(0,characterIndex)}</span> free of cost</p>
                <p className="para">
                Confused on which tech stack to choose? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Vikash is my attempt to Provide those coding techniques to people in short time which took me ages to learn.
                </p>
                <button>Explore Courses</button>
            </div>
        </div>
        <div className="blur" style={isdark?{background:` linear-gradient(
        180deg,
        rgba(11, 22, 37, 0) 0%,
        rgb(11, 22, 37) 79.17%
    )
    `}:{background:`linear-gradient(
                  180deg,
                  rgba(255, 255, 255,0) 0%,
                   #ffffff 79.17%
              )`}}></div>
              <div className="content"></div>
    </div>
  )
}

export default Hero