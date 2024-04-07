import React from 'react'
import { Link } from 'react-router-dom'
import { useMovie } from '../MovieContext'

const Home = () => {
  const {moviedata,settitle,fetchdata}=useMovie()
  return (
    <div className='min-h-screen bg-slate-900 text-white py-10 px-5 font-sans'>
      <p className='text-center font-bold text-green-500'>Serch your favourite hollywood movie</p>
      <input type="text" placeholder='moviename' className='rounded-full px-4 py-2 w-full my-4 outline-none text-black'/>
      <button className='border-2 p-4 rounded-lg' onClick={fetchdata}>search</button>
      <section className='flex flex-wrap justify-center gap-10 my-2'>
         {moviedata.map((item)=>{
            return <Link to="/movie"><div className='bg-gray-700 w-fit p-5 rounded text-center'>
            <p className='mb-2'>movie name</p>
            <img src="https://up.yimg.com/ib/th?id=OIP.EUd4Cs-nti2Ja698lCnLlQHaLH&pid=Api&rs=1&c=1&qlt=95&w=80&h=120" alt="poster" className='h-[200px] w-[150px]'/>
          </div></Link>
         })}
      </section>
    </div>
  )
}

export default Home
