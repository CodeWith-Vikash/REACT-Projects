import React, { useState } from 'react'
import Option from './Option'


let custumstyle={
    backgroundColor:"green",
    color:'white',
    borderRadius:'5px',
    border:'1px solid green'
}
const Start = ({switchstart}) => {
  const [name, setname] = useState('')
  return (
    <div className='start'>
        <input type="text" placeholder='Enter your name' value={name}
         onChange={(e)=>setname(e.target.value)}
        />
        <button style={custumstyle} onClick={()=>name!='' && switchstart(true,name)}>Start quiz</button>
    </div>
  )
}

export default Start