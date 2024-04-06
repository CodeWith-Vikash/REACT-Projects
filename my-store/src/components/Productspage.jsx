import React, { useEffect, useState } from 'react'
import Data from './Data'
import Product from './Product'
import Navbar from './Navbar'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const Products = () => {
  const [searchval, setsearchval] = useState("")
  const [filtereddate, setfiltereddate] = useState(Data)
  const [selectval, setselectval] = useState()

  const searchproducts=()=>{
     setfiltereddate(Data.filter((item)=> item.productName.toLowerCase().startsWith(searchval.toLowerCase())))
  }

  const sortproducts=()=>{
    setfiltereddate(prevdata =>prevdata.sort((a,b)=>{
      if(selectval==="higher to lower"){
        return a.discountedPrice-b.discountedPrice
      }else{
        return b.discountedPrice-a.discountedPrice
      }
    }))
  }


  useEffect(()=>{
    sortproducts()
  },[selectval,Data])

  useEffect(()=>{
    searchproducts()
  },[searchval,Data])
  console.log(selectval);
  return (
    <>
        <Navbar/>
    <div className='productspage'>
    <div className="pronav">
    <input type="text" 
      placeholder='search products'
      value={searchval}
      onChange={(e)=> setsearchval(e.target.value)}
    />
     <select value={selectval}
       onChange={(e)=> setselectval(e.target.value)}
     >
       <option value="higher to lower">higher to lower</option>
       <option value="lower to higher">lower to higher</option>
     </select>
    </div>
    <div className="products">
      {filtereddate.map((item)=>{
         return <NavLink to="/singleprod" key={item.productName}><Product name={item.productName} price={item.price} img={item.image} id={item.id} /></NavLink>
      })}
    </div>
   </div>
    <Footer/>
    </>
  )
}

export default Products