import React from 'react'
import { FaXmark } from "react-icons/fa6";


const Ingredients = ({togglei,ingredients}) => {
    console.log(ingredients);
  return (
    <div className='ingredients'>
        <div style={{marginBottom:'20px'}}><FaXmark className='icon' onClick={()=> togglei()}/></div>
        {ingredients.map((item,index)=>{
                return <b key={index}>{item}</b>
        })}
    </div>
  )
}

export default Ingredients