import React, { useContext } from 'react'
import { Appcontext } from '../context/Productcontext'

const Product = ({name,price,img,id}) => {
  const {getsingledata} =useContext(Appcontext)
  // console.log(id);
  return (
    <div className='product' onClick={()=>getsingledata(id)}>
        <img src={img}/>
        <div className="prod-content">
            <span>{name}</span>
            <span>{price} $</span>
        </div>
    </div>
  )
}

export default Product