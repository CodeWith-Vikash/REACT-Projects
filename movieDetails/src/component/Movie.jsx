import React from 'react'
import { Link } from 'react-router-dom'
import { useMovie } from '../MovieContext'

const Movie = () => {
  const {singlemovie}=useMovie()
  console.log(singlemovie);
  return (
    <div className='bg-gray-900 h-screen flex justify-center items-center'>
        <div className='bg-gray-400 rounded-lg md:flex gap-5'>
        <img src={singlemovie.Poster}  alt="poster" className='md:h-fit md:w-[150px] rounded-tl-lg md:rounded-bl-lg w-[300px] h-[250px] rounded-tr-lg'/>
         <div className='py-5 px-4 grid font-semibold w-[280px] gap-2'>
            <p>{singlemovie.Title}</p>
            <p>{singlemovie.Year}</p>
            <p>{singlemovie.Type}</p>
            <Link to="/"><button className='border-2 border-black rounded-full hover:bg-black hover:text-white w-40 py-2'>Go back</button></Link>
         </div>
        </div>
    </div>
  )
}

export default Movie