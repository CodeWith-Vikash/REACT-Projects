import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Loading from './components/Loading'


const apiurl='https://www.omdbapi.com?apikey=9e22ef45'
const App = () => {
  const [moviedata, setmoviedata] = useState([])
  const [inputval, setinputval] = useState("random")
  const [loading, setloading] = useState(false)

    const fetchdata=async (title)=>{
      let response=await fetch(`${apiurl}&s=${title}`)
      let result= await response.json()
      let data=await result.Search
      setmoviedata(data)
      setloading(false)
    }

    const fetchMovies=()=>{
      setloading(true)
       fetchdata(inputval)
    }
  

  return (
    <div className='bg-zinc-700 min-h-screen w-full text-white font-mono'>
        <h1 className='text-center  text-orange-400 font-bold text-3xl p-4'>Film Info</h1>
       <div className='flex justify-center gap-2'>
       <input type="text" placeholder='Enter movie name'
         className='rounded-md px-4 py-2 bg-zinc-900'
         onChange={(e)=>setinputval(e.currentTarget.value)}
        /> 
        <button className='bg-green-600 font-semibold px-2 rounded-lg' onClick={fetchMovies}>Search</button>
       </div>
         <main>{loading ? <Loading/> :
          <div className='flex flex-wrap justify-center gap-4 py-4'>{
            !moviedata? <h3 className='text-red-500 font-semibold text-xl w-[70vw] text-center mt-4'>data not avilable fell free to search another things</h3> :moviedata.map((item)=>{
              return <Card image={item.Poster} title={item.Title} type={item.Type}/>
          })
          }</div> 
         }</main>
    </div>
  )
}

export default App