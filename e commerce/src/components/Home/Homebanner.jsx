import React from 'react'
import { NavLink } from 'react-router-dom'

const Homebanner = () => {
  return (
    <div className='h-[550px] w-full bg-[url(/banner.jpg)] bg-cover bg-center'>
        <div className="h-[550px] flex justify-center items-center">
            <div className='flex flex-col gap-2'>
            <h3 className='text-[100px] font-bold text-gray-900'>SALE</h3>
            <p className='w-[300px] font-semibold leading-4 text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quam soluta alias totam omnis adipisci, temporibus vitae neque dolores quo doloremque aut odit labore, id maxime numquam modi! Cupiditate, corporis.</p>
            <NavLink to="/products">
            <button className='border-2 border-gray-900 text-gray-900 px-2 py-1 rounded w-fit hover:bg-gray-900 hover:text-white font-semibold'>Shop now</button>
            </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Homebanner