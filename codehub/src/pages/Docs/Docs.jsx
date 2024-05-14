import React, { useState } from 'react'
import './Style.scss'
import Doc from './Doc/Doc'
import {data} from './Docdata'
import { useSelector } from 'react-redux'

const Docs = () => {
  const {isdark}=useSelector((state)=>state.mainReducer.home)
  const [docsdata, setdocsdata] = useState(data)
  const [inputval, setinputval] = useState("")
  return (
    <div className={`docs ${isdark?'dark':'light'}`}>
       <input type="text" placeholder='search docs'
         value={inputval}
         onChange={(e)=>{
          setinputval(e.target.value)
         }}
       />
      <div className="data">
      {data.filter((item)=> item.tech.toLocaleLowerCase().includes(inputval.toLocaleLowerCase())).map((item)=>{
        return <Doc image={item.image} title={item.tech} link={item.link} key={item.id}/>
      })}
      </div>
    </div>
  )
}

export default Docs