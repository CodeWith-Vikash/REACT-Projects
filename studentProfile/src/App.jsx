import React, { useState } from 'react'
import list  from './Components/Data'
import Card from './Components/Card'

const App = () => {
  const [showdata, setshowdata] = useState(true)
  const [profile, setprofile] = useState([])
  const [rollno, setrollno] = useState(1)
  const searchStudent=()=>{
    setshowdata(false)
    let data=list.filter((user)=>user.rollno==rollno)
    setprofile(data)
  }
  return (
    <div className='min-h-screen w-full bg-slate-800 text-white font-sans'>
      <h1 className='font-bold text-2xl text-center p-4'>Students profile</h1>
      <section className='flex justify-center mt-4  gap-2'>
         <input type="number" placeholder='Enter roll no'
         className='outline-none pl-4 py-1 rounded text-black font-semibold' onChange={(e)=> setrollno(e.currentTarget.value)}/>
         <button className='bg-green-600 px-4 py-2 font-semibold rounded'onClick={searchStudent}>Search</button>
      </section>
      <section className='flex flex-wrap justify-center mt-10 gap-4 px-4'>{rollno>0 && rollno<=list.length?
       showdata?list.map((person)=>{
        return <Card name="*****" rollno="*****" image={person.image}/>
    }):
      <Card name={profile[0].username} rollno={profile[0].rollno} image={profile[0].image}/>: <p className='text-red-600 text-2xl'>Invalid Rollno</p>
      }</section>
    </div>
  )
}

export default App