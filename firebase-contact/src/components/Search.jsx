import { doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase'
import { NavLink } from 'react-router-dom'

const Search = () => {
  const [inputval, setinputval] = useState("")
  const [data, setdata] = useState({})
  const [err, seterr] = useState(false)
  const [isloading, setisloading] = useState(false)
  const getdata=async()=>{
    setisloading(true)
      try {
        const userdata= await getDoc(doc(db,"data",inputval))
        if(userdata.exists()){
          setdata(userdata.data())
          setisloading(false)
        }else{
          seterr(true)
          setisloading(false)
        }
      } catch (error) {
          seterr(true)
          setisloading(false)
      }
      
  }
  return (
    <div className='h-screen bg-gray-600 flex pt-10 gap-10 items-center flex-col'>
      <div className="flex gap-3">
        <input type="text"  placeholder='Search user' className='px-4 rounded-lg outline-none' autoFocus
          value={inputval}
          onChange={(e)=> setinputval(e.target.value)}
        />
        <button className='bg-red-600 text-white rounded-lg p-2' onClick={getdata}>Search</button>
      </div>
      <section className='bg-white flex flex-col gap-3 p-6 rounded-lg min-h-[50vh] w-[300px] '>{
        isloading?<b className='text-green-500 text-center'>Loading...</b>:err?<span className='text-red-600 font-semibold text-center'>data not found</span>:
         <div>
             <img src="https://up.yimg.com/ib/th?id=OIP.iptzZYdxQX_HJQSWlQBRFgHaHa&pid=Api&rs=1&c=1&qlt=95&w=103&h=103" className='h-[100px] w-[100px] my-0 mx-auto rounded-full'/>
        <div className='flex flex-col gap-3'>
        <p><b>Name</b> : {data.name}</p>
        <p><b>Email</b> : {data.email}</p>
        <p><b>Contact</b> : {data.phone}</p>
        <p><b>Address</b> : {data.address}</p>
        <p><b>Message</b>: {data.message}</p>
        <p>Do you need to add date? <NavLink to="/" className="text-red-600">Form</NavLink></p>
        </div>
         </div>
      }</section>
    </div>
  )
}

export default Search