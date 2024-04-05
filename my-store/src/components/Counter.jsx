import React from 'react'

const Counter = ({quantity,increasequantity,decreasequantity}) => {
  return (
    <div className='counter'>
        <span onClick={decreasequantity}>-</span>
        <span>{quantity}</span>
        <span onClick={increasequantity}>+</span>
    </div>
  )
}

export default Counter