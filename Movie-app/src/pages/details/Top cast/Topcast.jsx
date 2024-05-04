import React from 'react'
import './Style.scss'
import ContentWrapper from '../../../components/contentWrapper/Wrapper';
import Img from '../../../components/lazyload/img';
import { useSelector } from 'react-redux';
import noprofile from '../../../assets/avatar.png'

const Topcast = ({data}) => {
    const {url}= useSelector((state)=>state.home)
    console.log(data);
  return (
    <div className='cast'>
        <p className="title">
            Top Cast
        </p>
        <ContentWrapper>
            {data?.map((person)=>{
                return <div className="person">
                    <Img src={person.profile_path ? url.profile+person.profile_path:noprofile}/>
                   <p>{person.name}</p>
                   <span>{person.character}</span>
                </div>
            })}
        </ContentWrapper>
    </div>
  )
}

export default Topcast