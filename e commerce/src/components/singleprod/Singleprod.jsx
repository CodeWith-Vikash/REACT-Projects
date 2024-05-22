import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Singleprod = () => {
  const {name}=useParams()
  const [isloading, setisloading] = useState(false)
  const [products, setproducts] = useState([])
  const [quantity, setquantity] = useState(0)
  const data=useSelector((state)=>state.productSlice)
  console.log(data);


  const fetchpopular=async()=>{
    setisloading(true)
const options = {
  method: 'GET',
  url: `https://ebay-search-result.p.rapidapi.com/search/${name}`,
  headers: {
    'X-RapidAPI-Key': '59a2f37d10msh5e0c2313caf714ep125022jsn34d1b7daea85',
    'X-RapidAPI-Host': 'ebay-search-result.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
  setproducts(response.data.results)
  setisloading(false)
} catch (error) {
  console.error(error);
  setisloading(false)
}
}
// console.log(products);
useEffect(()=>{
   fetchpopular()
},[name])
  return (
    <div className='min-h-screen pt-10'>
      <section className='flex flex-col w-fit h-fit my-0 mx-auto md:flex-row'>
         <img src={data.image} alt=""  className='h-[300px] w-[300px] object-cover border-2'/>
         <div className='w-[300px] p-4 flex flex-col gap-2 md:gap-4'>
          <p className='font-semibold text-lg'>{data.title}</p>
          <b>{data.price}</b>

          <div className='flex gap-2'>
            <div className="counter my-2 font-semibold text-xl">
              <span className='px-4 py-[6px] border-black border-2' onClick={()=> setquantity(quantity+1)}>+</span>
              <span className='px-4 py-[6px] border-black border-2'>{quantity}</span>
              <span className='px-4 py-[6px] border-black border-2' onClick={()=> setquantity(quantity-1)}>-</span>
            </div>
            <button className=' text-white bg-gray-900 px-2 py-1 rounded w-fit  font-semibold'>Add to cart</button>
          </div>

         </div>
      </section>
    </div>
  )
}

export default Singleprod