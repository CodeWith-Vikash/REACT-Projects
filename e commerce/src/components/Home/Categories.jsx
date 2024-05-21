import React from 'react'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
    const navigate=useNavigate()
    const catarray=[{category:'CASUAL-WEARS',image:'/clothes.jfif'},
    {category:'HEADPHONES',image:'/headphones.jfif'},
    {category:'SHOES',image:'/shoes.jfif'},
    {category:'SMARTPHONES',image:'/smartphones.jfif'},
    ]
  return (
    <div className='py-10 flex flex-wrap justify-center gap-4 cursor-pointer z-10' >
        {catarray.map((item)=>{
            return <div className='group w-[250px] h-[155px] relative overflow-hidden' onClick={()=> navigate(`/search/${item.category}`)} key={item.category}>
            <img src={item.image} alt="" className='group-hover:scale-[1.1] object-contain h-full w-full'/>
            <div className=' absolute top-0 w-[250px] h-[155px] flex justify-center items-center bg-black bg-opacity-[0.3] text-white font-semibold'>
                {item.category}
            </div>
        </div>
        })}
    </div>
  )
}

export default Categories