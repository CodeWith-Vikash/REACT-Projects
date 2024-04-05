import React, { useContext, useEffect, useState } from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import Navbar from './Navbar'
import Footer from './Footer'
import { CartContext } from '../context/Cartcontext';

const getlocalstorage=()=>{
    const prodata=JSON.parse(localStorage.getItem("productdata"))
    return prodata
}
const SingleProd = () => {
  const [isitemexistincart, setisitemexistincart] = useState(false)
  const {addtocart,cart}=useContext(CartContext)
  const [localprodata, setlocalprodata] = useState(getlocalstorage)
  const {productName,price,discountedPrice,image,about,quantity,id}=localprodata[0]
  const [proquantity, setproquantity] = useState(quantity)
  console.log(cart);
  const increasequantity=()=>{
      setproquantity(proquantity+1)
  }
  const decresequantity=()=>{
    if(proquantity>1){
      setproquantity(proquantity-1)
    }
  }
  useEffect(()=>{
    cart.map((item)=>{
       if(item.id==id){
         setisitemexistincart(true)
       }
    })
  },[])
  return (
    <>
       <Navbar/>
          <div className='singleprod'>
       <img src={image}/>
       <div className="single-content">
         <b>{productName}</b>
         <p>MRP: {price}</p>
         <p>Deal of the day : {discountedPrice}</p>
         <p>{about}</p>
         <div className="prodfeatures">
           <div className="feat">
             <TbTruckDelivery/>
             <span>Free delivery</span>
           </div>
           <div className="feat">
             <GiTakeMyMoney/>
             <span>30 Daya replacement policy</span>
           </div>
           <div className="feat">
             <MdSystemSecurityUpdateGood/>
             <span>Secure payment</span>
           </div>
           <div className="feat">
             <MdOutlineSecurity/>
             <span>Product Safety</span>
           </div>
         </div>
         <div className="counter">
          <span onClick={decresequantity}>-</span>
          <span>{proquantity}</span>
          <span onClick={increasequantity}>+</span>
         </div>
           <button onClick={() => {
            if (!isitemexistincart) {
              addtocart(proquantity);
              // Update state after successful addition (assuming addtocart returns true on success)
              setisitemexistincart(true);
            }
          }}>Add to cart</button>
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default SingleProd