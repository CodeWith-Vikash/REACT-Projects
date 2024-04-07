import React from 'react'
import { Link } from 'react-router-dom'

const Movie = () => {
  return (
    <div className='bg-gray-900 h-screen flex justify-center items-center'>
        <div className='bg-gray-400 rounded-lg md:flex gap-5'>
        <img src="https://up.yimg.com/ib/th?id=OIP.EUd4Cs-nti2Ja698lCnLlQHaLH&pid=Api&rs=1&c=1&qlt=95&w=80&h=120" alt="poster" className='md:h-fit md:w-[150px] rounded-tl-lg md:rounded-bl-lg w-[300px] h-[170px] rounded-tr-lg'/>
         <div className='py-5 px-4 grid font-semibold w-[280px] gap-2'>
            <p>spiderman2</p>
            <p>14 nov 2034</p>
            <p>comedy,action,thriller</p>
            <p>7.5/10</p>
            <p>united kingdom,france,united states</p>
            <Link to="/"><button className='border-2 border-black rounded-full hover:bg-black hover:text-white w-40 py-2'>Go back</button></Link>
         </div>
        </div>
    </div>
  )
}

export default Movie