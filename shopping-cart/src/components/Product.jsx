import React from 'react'

const Product = ({img,name,price,addtocart}) => {
  return (
    <div className='product'>
        <img src={img}/>
        <b>{name}</b>
        <b>{price}$</b>
        <button onClick={()=> addtocart({name:name,price:price,image:img})}>Add to cart</button>
    </div>
  )
}

export default Product