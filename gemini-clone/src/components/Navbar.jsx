import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6 py-4 shadow-md '>
        <div className='flex gap-3 items-center'>
            <GiHamburgerMenu size="1.5rem" className='cursor-pointer'/>
            <h1 className='text-xl font-semibold font-sans'>Jarvis</h1>
        </div>
        <img src="https://up.yimg.com/ib/th?id=OIP.iptzZYdxQX_HJQSWlQBRFgHaHa&pid=Api&rs=1&c=1&qlt=95&w=103&h=103" className='h-10 w-10 rounded-full'/>
    </div>
  )
}

export default Navbar