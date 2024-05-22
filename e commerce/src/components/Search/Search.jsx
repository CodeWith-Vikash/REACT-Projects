import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Skeleton from '../Skeleton/Skeleton'
import Product from '../Product/Product'

const Search = () => {
  const {query}=useParams()
  const [isloading, setisloading] = useState(false)
  const [products, setproducts] = useState([])


  const fetchpopular=async()=>{
    setisloading(true)
const options = {
  method: 'GET',
  url: `https://ebay-search-result.p.rapidapi.com/search/${query}`,
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
},[query])
  return (
    <div className='min-h-screen py-10'>
      {
        isloading?<div className='flex flex-wrap justify-center gap-6 p-10'>
          {
           Array.from({length:20}).map(()=>{
              return <Skeleton key={Math.random()}/>
            })
          }
        </div>:
        <div className='flex flex-col gap-10 px-4 py-2'>
        <h3 className='font-seimibold text-[1.5rem]'>results for '{query}'</h3>
        <div className='flex flex-wrap justify-center gap-6'>
          {
            products.map((item)=>{
              return <Product id={item.id} image={item.image} title={item.title} price={item.price} key={item.id} item={item}/>
            })
          }
        </div>
      </div>
      }
    </div>
  )
}

export default Search