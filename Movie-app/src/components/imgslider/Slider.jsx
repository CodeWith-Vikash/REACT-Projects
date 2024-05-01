import React from 'react'
import './Style.scss'
import ContentWrapper from '../contentWrapper/Wrapper';
import { useSelector } from 'react-redux';
import posteralt from '../../assets/no-poster.png'

const Slider = ({data}) => {
    console.log(data);
    const {url}=useSelector((state)=>state.home)
  return (
    <div className='slider'>
        <ContentWrapper>
            {data?.map((item)=>{
                return <div className="card" key={item.id}>
                    <img src={item.poster_path?url.poster+item.poster_path:posteralt} alt="" />
                    <div className="circle">{item.vote_average}</div>
                    <p>{item.title || item.name}</p>
                    <span>{item.release_date || item.first_air_date}</span>
                </div>
            })}
        </ContentWrapper>
    </div>
  )
}

export default Slider