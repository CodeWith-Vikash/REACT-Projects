import React from 'react'
import { Link } from 'react-router-dom'
import { useMovie } from '../MovieContext'

const Home = () => {
  const {moviedata,settitle,fetchdata,getsinglemovie,title,isloading,iserror,errormessage}=useMovie()
  return (
    <div className='min-h-screen bg-slate-900 text-white py-10 px-5 font-sans'>
      <p className='text-center font-bold text-green-500'>Serch your favourite movie or series listed on imdb</p>
      <input type="text" placeholder='moviename' 
       value={title} 
       onChange={(e)=>{
          settitle(e.target.value)
       }}
      className='rounded-full px-4 py-2 w-full my-4 outline-none text-black'/>
       {isloading ? <p className='text-center text-xl font-semibold'>Loading....</p>: iserror?<p className='text-center text-xl font-semibold text-red-600'>{errormessage}</p>:<section className='flex flex-wrap justify-center gap-10 my-2'>
         {moviedata.map((item)=>{
            return <Link to="/movie" key={item.imdbID}><div className='bg-gray-700 w-[170px] p-5 rounded text-center' onClick={()=>{getsinglemovie(item)}}>
            <p className='mb-2'>{item.Title}</p>
            <img src={item.Poster} alt="poster" className='h-[200px] w-[150px]'/>
          </div></Link>
         })}
      </section>}
    </div>
  )
}

export default Home
