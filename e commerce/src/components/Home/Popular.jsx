import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../Product/Product'
import Skeleton from '../Skeleton/Skeleton'

const Popular = () => {
  const [products, setproducts] = useState([])
  const [isloading, setisloading] = useState(false)
  const fetchpopular=async()=>{

    setisloading(true)


try {
	const response = await axios.request('https://fakestoreapiserver.reactbd.com/products');
	console.log(response.data);
  setproducts(response.data)
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
        products.map((item)=>{
          return <div className='relative'>
            <Product item={item} id={item._id} image={item.image} price={item.price} title={item.title} key={item.id}/>
            <span className='bg-black text-white px-4 py-1 text-sm absolute top-0 right-0'>Sale</span>
          </div>
        })
      }
    </div>}
      
    </div>
  )
}

export default Popular