import React, { useState } from 'react'
import data from './Data'
import { MdAddBox } from "react-icons/md";
import { FaSquareMinus } from "react-icons/fa6";

const Question = ({i}) => {
    const [status, setstatus] = useState(false)
    const [information, setinformation] = useState(data)
  return (
            <div className='text-sm bg-white shadow-lg mb-2'>
                <div className="quest flex justify-between px-3 items-end py-2">
                    <p className='font-semibold'>{information[i].title}</p>
                    {status && <FaSquareMinus onClick={()=> setstatus(!status)} className='cursor-pointer text-lg'/> || <MdAddBox onClick={()=> setstatus(!status)} className='cursor-pointer text-lg'/>}
                </div>
                <div className="answer text-justify leading-4 tracking-tight px-2 py-1">
                    {status && information[i].info}
                </div>
            </div>
  )
}

export default Question