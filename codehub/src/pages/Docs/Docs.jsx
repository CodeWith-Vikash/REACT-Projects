import React from 'react'
import './Style.scss'
import Doc from './Doc/Doc'
import {data} from './Docdata'

const Docs = () => {
  return (
    <div className='docs'>
      {data.map((item)=>{
        return <Doc image={item.image} title={item.tech} link={item.link} key={item.id}/>
      })}
    </div>
  )
}

export default Docs