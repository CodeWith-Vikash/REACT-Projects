import React from 'react'
import './Style.scss'
import Doc from './Doc/Doc'
import {data} from './Docdata'
import { useSelector } from 'react-redux'

const Docs = () => {
  const {isdark}=useSelector((state)=>state.mainReducer.home)
  return (
    <div className={`docs ${isdark?'dark':'light'}`}>
      {data.map((item)=>{
        return <Doc image={item.image} title={item.tech} link={item.link} key={item.id}/>
      })}
    </div>
  )
}

export default Docs