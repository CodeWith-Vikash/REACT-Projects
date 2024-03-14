import React from 'react'
import { FaTrashCan } from "react-icons/fa6";

const SavedNote = ({text,date,id,deletenote,index}) => {
  return (
    <div className='note saved'>
        <p>{text}</p>
        <div className="textelem">
            <small>{date}</small>
            <FaTrashCan className='icon' size='1.5rem' onClick={()=> deletenote(index)}/>
        </div>
    </div>
  )
}

export default SavedNote