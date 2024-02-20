import React from 'react'

const Card = ({title,image,type}) => {
  return (
    <div className='flex justify-center'>
        <div>
            <div className="card rounded-lg shadow-2xl">
                <div className={`poster h-[30vh] w-[200px] bg-top bg-cover text-center pt-10 bg-red-900 rounded-t-lg`} style={{
                    backgroundImage :`url(${image})`
                }}>{
                    <h2>{image=='N/A'?"sorry!,poster is not avilable":""}</h2>
                }</div>
                <span className='p-2 font-semibold text-gray-400'>{type}</span>
                <p className='py-2 font-semibold leading-5 px-2 w-[190px] text-orange-500'>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default Card