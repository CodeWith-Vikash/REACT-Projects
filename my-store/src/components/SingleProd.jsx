import React, { useContext } from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import Navbar from './Navbar'
import Footer from './Footer'
import { Appcontext } from '../context/Productcontext';


const SingleProd = () => {
  const {singledata}=useContext(Appcontext)
  const {productName,price,discountedPrice,image,about}=singledata[0]
  console.log(singledata);
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
          <span>-</span>
          <span>0</span>
          <span>+</span>
         </div>
         <button>Add to cart</button>
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default SingleProd