import React from 'react'
import { useSelector } from 'react-redux';
import './Style.scss'

const Genres = ({data,gens}) => {
    const { genres } = useSelector((state) => state.home);
    console.log(data);
  return (
    <div className='genre-container'>
        {
            data ?data.map((item,index)=>{
                return <div className='p' key={index}>{genres[item]?.name}</div>
            }):
            gens?.map((item,index)=>{
              return <div className='p' key={index}>{genres[item]?.name}</div>
          })
        }
    </div>
  )
}

export default Genres