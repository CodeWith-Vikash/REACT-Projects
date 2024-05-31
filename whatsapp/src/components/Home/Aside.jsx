import React from 'react'
import { FaArrowAltCircleLeft,FaSearch } from "react-icons/fa";

const Aside = ({closeSide}) => {
  return (
    <div className='flex flex-col gap-4'>
        <nav className='h-[9.2vh] bg-black flex items-center justify-between px-2 w-full'>
          <div className='flex items-center gap-1'>
            <img src="https://up.yimg.com/ib/th?id=OIP.7PFJ2-xr8x_3EprzHWmXAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=119&h=119" alt="" className='h-10 rounded-full'/>
            <span>name</span>
          </div>
           <div className='flex items-center gap-2'>
           <button className='bg-white text-black font-semibold py-1 px-2 rounded text-sm'>Logout</button>
           <FaArrowAltCircleLeft size="2rem" className='cursor-pointer md:hidden' onClick={closeSide}/>
           </div>
        </nav>
        <section className='relative w-fit my-0 mx-auto'>
            <input type="text" placeholder='Search' className='w-[280px] xl:w-[350px] lg:w-[310px] p-2 outline-none rounded-lg bg-zinc-700'/>
            <FaSearch size="1rem" className='absolute top-[50%] translate-y-[-50%] right-3'/>
        </section>

        <section className='h-[70vh] overflow-auto flex flex-col gap-2'>
            <div className='flex gap-2 p-2 hover:bg-black cursor-pointer'>
                <img src="https://up.yimg.com/ib/th?id=OIP.Bv23QwiO7nTO6tvLBeGLLwHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120" alt="" className='rounded-full h-12'/>
                <div className='w-[230px]'>
                    <p className='font-semibold'>fjldfjslfslfsflf ldfsdlfjsdlfj fldfflfl</p>
                    <span className='text-sm'>fldfjdlsfsklfdkffld fldflsfls fldf</span>
                </div>
            </div>
            {/* fjldfjlfjdlfslf */}
        </section>
    </div>
  )
}

export default Aside