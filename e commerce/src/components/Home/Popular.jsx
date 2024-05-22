import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../Product/Product'
import Skeleton from '../Skeleton/Skeleton'

const Popular = () => {
  const [products, setproducts] = useState([])
  const [isloading, setisloading] = useState(false)
  const fetchpopular=async()=>{

    setisloading(true)
const options = {
  method: 'GET',
  url: 'https://ebay-search-result.p.rapidapi.com/search/trending',
  headers: {
    'X-RapidAPI-Key': '59a2f37d10msh5e0c2313caf714ep125022jsn34d1b7daea85',
    'X-RapidAPI-Host': 'ebay-search-result.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
  setproducts(response.data.results)
} catch (error) {
	console.error(error);
}finally{
  setisloading(false)
}

}
// console.log(products);
useEffect(()=>{
   fetchpopular()
},[])
  return (
    <div className='flex flex-col gap-10 px-4 py-20'>
      <h3 className='font-seimibold text-[1.5rem]'>Popular Products</h3>
      {isloading?<div className='flex flex-wrap justify-center gap-6 p-10'>
        {
         Array.from({length:20}).map(()=>{
            return <Skeleton key={Math.random()}/>
          })
        }
      </div>
      :<div className='flex flex-wrap justify-center gap-6'>
      {
        products.slice(0,16).map((item)=>{
          return <Product item={item} id={item.id} image={item.image} price={item.price} title={item.title} key={item.id}/>
        })
      }
    </div>}
      
    </div>
  )
}

export default Popular