import React from 'react'

const Product = ({name,price,img}) => {
  return (
    <div className='product'>
        <img src={img}/>
        <div className="prod-content">
            <span>{name}</span>
            <span>{price} $</span>
        </div>
    </div>
  )
}

export default Product