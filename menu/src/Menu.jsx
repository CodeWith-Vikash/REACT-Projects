import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='main my-0 mx-auto'>
        {
            items.map((menuItems)=>{
                const {id,title,category,price,img,desc}=menuItems
                return (
                    <div className=' mb-4 shadow-xl w-fit'>
                        <img src={img} alt={title} className='w-[350px] border-4 border-orange-700 rounded-lg'/>
                        <div className='flex justify-between px-4 pt-1'>
                            <p className='font-bold text-gray-800'>{title}</p>
                            <b className='text-orange-700'>${price}</b>
                        </div>
                        <p className='w-[350px] leading-5 p-4 text-justify font-semibold text-gray-700'>{desc}</p>

                    </div>
                )
            })
        }
    </div>
  )
}

export default Menu