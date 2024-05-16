import React, { useState } from 'react'
import './Style.scss'
import Roadmap from './Roadmap'
import { useSelector } from 'react-redux'
import {techs} from './Roadmapdata'

const Roadmaps = () => {
    const {isdark}=useSelector((state)=>state.mainReducer.home)
    const [inputval, setinputval] = useState("")
    return (
      <div className={`roadmaps ${isdark?'dark':'light'}`}>
         <input type="text" placeholder='search roadmaps'
           value={inputval}
           onChange={(e)=>{
            setinputval(e.target.value)
           }}
         />
        <div className="data">
        {techs.filter((item)=> item.name.toLocaleLowerCase().includes(inputval.toLocaleLowerCase())).map((item)=>{
          return <Roadmap tech={item.name} pdf={item.pdf} key={item.name}/>
        })}
        </div>
      </div>
    )
}

export default Roadmaps