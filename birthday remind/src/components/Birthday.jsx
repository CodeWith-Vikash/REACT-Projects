import React from 'react'

const Birthday = ({name,age,image}) => {
  return (
    <div className='flex gap-2 p-2'>
        <img src={image} className='rounded-full h-10'/>
        <div className="content flex flex-col gap-0 leading-3 text-sm">
            <span className='font-bold text-sm'>{name}</span>
            <span>{age} years</span>
        </div>
    </div>
  )
}

export default Birthday