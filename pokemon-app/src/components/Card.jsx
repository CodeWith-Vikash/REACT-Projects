import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col items-center gap-2 justify-center md:gap-6'>
        <p>Saturo</p>
        <img src="src\components\gojo.jfif" className='h-[100px] w-[150px]'/>
        <div>
        <div className='flex items-center gap-4'>
        <button className='bg-red-800 py-1 font-semibold px-4 rounded-md'>Torent</button>
        <button className='bg-red-800 py-1 font-semibold px-4 rounded-md'>Rain-dash</button>
        </div>
        </div>
        <section className='flex flex-col items-center'>
            <p>hp 100</p>
            <p>attack 60</p>
            <p>special attack 30</p>
            <p>special defence 40</p>
            <p>speed 80</p>
        </section>
    </div>
  )
}

export default Card