import React from 'react'

const Buttons = ({text,p,category,filterFun}) => {
  return (
    <button data-id={category} onClick={()=>filterFun(category)}>{text}{p}</button>
  )
}

export default Buttons