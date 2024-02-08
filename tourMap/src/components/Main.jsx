import React, { useEffect, useState } from 'react'
import Loading from './Loading'

const Main = () => {
    const [loading, setloading] = useState(true)
    const [list, setlist] = useState([])
    const getData=async ()=>{
        const url='https://course-api.com/react-tours-project'
        const response= await fetch(url)
        const data= await response.json()
        setlist(data)
        setloading(false)
        console.log(data);
     }

     useEffect(()=>{
        getData()
     },[])


    if(loading){
        return <Loading/>
    }

  return (
    <div>
        <div>
            {
                list.map((place)=>{
                   if(place.id!=='recJLWcHScdUtI3ny'){
                    return(
                        <div className='bg-gray-100 w-[400px] relative mb-[8vh] h-[80vh] rounded-lg shadow-lg'>
                          <img className='w-full' src={place.image}/>
                         <div className='flex justify-between px-6 py-4'>
                             <p className='font-bold'>{place.name}</p>
                             <b className='text-blue-700'>{place.price}$</b>
                         </div>
                         <p className='text-justify px-4 h-[17vh] overflow-hidden leading-5 font-medium text-gray-800'>{place.info}</p>
                         <button className='text-red-600 border border-1 border-red-600 px-4 py-1 text-md w-[150px] absolute left-[30%] bottom-2 hover:bg-slate-300'>Not Interested</button>
                        </div>
                     )
                   }
                })
            }
        </div>
    </div>
  )
}

export default Main