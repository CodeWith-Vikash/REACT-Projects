import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Popular = () => {
  const [products, setproducts] = useState([])
  const fetchpopular=async()=>{

const options = {
  method: 'GET',
  url: 'https://ebay-search-result.p.rapidapi.com/search/men-fashion',
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
}

}
// console.log(products);
useEffect(()=>{
   fetchpopular()
},[products])
  return (
    <div className='flex flex-col gap-10 px-4 py-20'>
      <h3 className='font-seimibold text-[1.5rem]'>Popular Products</h3>
      <div className='flex flex-wrap justify-center gap-6'>
        {
          products.slice(0,16).map((item)=>{
            return <div className='w-[250px]  min-h-[250px] flex flex-col gap-2 shadow-xl' key={item.id}>
            <img src={item.image} alt="" className='h-[200px] w-full object-cover object-center'/>
            <p className='leading-5 font-semibold px-2'>{item.title}</p>
            <b className='p-2'>{item.price}</b>
          </div>
          })
        }
      </div>
    </div>
  )
}

export default Popular