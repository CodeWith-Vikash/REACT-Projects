import React from 'react'
import { TiDelete } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import {removeProfile} from '../profileSlice'

const Card = ({name,skills,job,exp,image,id}) => {
  const dispatch=useDispatch()
  const handleremove=()=>{
    dispatch(removeProfile(id))
  }
  return (
    <div className='text-white bg-zinc-800 w-[250px] h-fit rounded-lg flex flex-col p-4 gap-3'>
        <img src={image} alt="imgage" className='rounded-full h-[100px] w-[100px] my-0 mx-auto'/>
        <p><b>Name : </b>{name}</p>
        <p><b>Skills : </b>{skills}</p>
        <p><b>Job Role : </b>{job}</p>
        <p><b>Experience : </b>{exp}</p>
        <div className='flex justify-end items-center'><TiDelete size="2rem" color='red' className='cursor-pointer' onClick={handleremove}/></div>
    </div>
  )
}

export default Card