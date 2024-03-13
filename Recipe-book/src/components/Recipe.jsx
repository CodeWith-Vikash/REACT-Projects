import React, { useState } from 'react'
import Ingredients from './Ingredients'

const Recipe = ({name,img,link,ingredients}) => {
    const [showingredient, setshowingredient] = useState(false)
    const toggleingredient=()=>{
        setshowingredient(!showingredient)
     }
  return (
    <div className='recipe'>
        <img src={img} />
        <b>{name}</b>
        <button onClick={toggleingredient}>Ingredients</button>
        <button className='fullbtn'><a href={link}>Full Ingredents</a></button>
        {showingredient&&<Ingredients togglei={toggleingredient} ingredients={ingredients}/>}
    </div>
  )
}

export default Recipe