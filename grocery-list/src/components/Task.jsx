import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Task = ({task,index,deleteitem,edititem}) => {
  return (
    <div className='flex justify-between bg-gray-400 px-4 py-2 rounded-md mb-2'>
        <b>{task}</b>
        <div className="btns flex items-center gap-2">
        <FaEdit size="1.2rem" className='text-blue-600 cursor-pointer' onClick={()=> edititem(index,task)}/>
        <MdDelete size="1.4rem" className='text-red-600 cursor-pointer' onClick={()=>deleteitem(index)}/>
        </div>
    </div>
  )
}

export default Task