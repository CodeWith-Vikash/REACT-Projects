import React from 'react'
import Shop from './Shop';

const Cart = ({data,removeitem,total}) => {
    // console.log(data.length);

  return (
    <div className='cart'>
      <div className="price">
          <b>Total price : {total}$</b>
          +
          <b>service charges : 0$</b>
          =
          <hr />
          <b>Final price : {total}$</b>
          <button>pay now</button>
      </div>
     <div className='materials'>
        {
           data.map((item,index)=>{
              return <Shop name={item.name} price={item.price} img={item.image} key={index} index={index} removeitem={removeitem}/>
           })
        }
     </div>
    </div>
  )
}

export default Cart