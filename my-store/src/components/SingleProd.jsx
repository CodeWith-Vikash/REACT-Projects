import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import Navbar from './Navbar'
import Footer from './Footer'
import Counter from './Counter'
import { CartContext } from '../context/Cartcontext';

const getlocalstorage=()=>{
    const prodata=JSON.parse(localStorage.getItem("productdata"))
    return prodata
}
const SingleProd = () => {
  const [isitemexistincart, setisitemexistincart] = useState(false)
  const {addtocart,cart}=useContext(CartContext)
  const [localprodata, setlocalprodata] = useState(getlocalstorage)
  const {productName,price,discountedPrice,image,about,id}=localprodata[0]
  const [quantity, setquantity] = useState(1)

  const increasequantity=()=>{
      setquantity(quantity+1)
  }
  const decreasequantity=()=>{
    if(quantity>1){
       setquantity(quantity-1)
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
         <p style={{color:"black"}}>MRP: <span style={{textDecoration:"line-through"}}>{price}$</span></p>
         <p style={{color:"black"}}>Deal of the day : {discountedPrice}$</p>
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
          <Counter
             quantity={quantity}
             increasequantity={increasequantity}
             decreasequantity={decreasequantity}
          />
           <NavLink to="/cart"><button onClick={() => {
            if (!isitemexistincart) {
              addtocart(quantity);
              // Update state after successful addition (assuming addtocart returns true on success)
              setisitemexistincart(true);
            }
          }}>Add to cart</button></NavLink>
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default SingleProd