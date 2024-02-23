import React from 'react'
import Button from './button'

const Main = () => {
  return (
    <div className='main p-4 mt-4'>
        <div className="content w-[500px]">
            <b className='text-6xl'>YOUR FEET DESERVE THE BEST</b>
            <p className='w-[250px] my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum eius quae at enim in Lorem ipsum dolor sit amet.</p>
            <Button data="Shop Now"/>
            <button className=' border-black border-2 px-3 h-8 mx-4'>Category</button>
        </div>
        <img src="src/images/hero-image.png" className='mt-8'/>
    </div>
  )
}

export default Main