import React from 'react'

const Shop = ({img,name,price,removeitem,index}) => {
  return (
    <div className='cartitem'>
        <img src={img}/>
        <b>{name}</b>
        <b>{price}$</b>
        <button onClick={()=> removeitem(index)}>Remove</button>
    </div>
  )
}

export default Shop