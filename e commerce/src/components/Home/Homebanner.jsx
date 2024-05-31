import React from 'react'
import { NavLink } from 'react-router-dom'

const Homebanner = () => {
  return (
    <div className='h-[550px] w-full bg-[url(/banner.jpg)] bg-cover bg-center'>
        <div className="h-[550px] flex justify-center items-center">
            <div className='flex flex-col gap-2'>
            <h3 className='text-[100px] font-bold text-gray-900'>SALE</h3>
            <p className='w-[300px] font-semibold leading-4 text-gray-900'>Indicart: Elevating Online Shopping with Quality, Convenience, and Integrity - Where Every Purchase Reflects Our Commitment to Excellence.</p>
           
            </div>
        </div>
    </div>
  )
}

export default Homebanner