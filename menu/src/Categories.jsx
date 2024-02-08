import React from 'react'

const Categories = ({categories,filterItems}) => {
    console.log(categories);
  return (
    <div className='flex gap-4 justify-center my-10'>
        {
            categories.map((category,index)=>{
                return <button key={index} className='bg-orange-900 text-white px-4 py-2 rounded-full font-bold' onClick={()=> filterItems(category)}>{category}</button>
            })
        }
    </div>
  )
}

export default Categories