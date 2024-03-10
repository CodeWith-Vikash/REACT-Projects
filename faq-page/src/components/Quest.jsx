import React, { useState } from 'react'
import { MdAddBox } from "react-icons/md";
import { FaMinusSquare } from "react-icons/fa";



const Quest = ({quest,answer}) => {
    const [isactive, setisactive] = useState(false)
    const toggle=()=>{
        setisactive(!isactive)
    }
  return (
    <div className='questbox'>
        <div className="quest">
            <b>{quest}</b>
            {!isactive?<MdAddBox onClick={toggle}/>:<FaMinusSquare onClick={toggle}/>
}
        </div>
        {isactive && <div className="answer">
            <p>{answer}</p>
        </div>}
    </div>
  )
}

export default Quest