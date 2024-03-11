import React, { useState } from 'react'


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
        <h2>Quiz App</h2>
        <input type="text" placeholder='Enter your name' value={name}
         onChange={(e)=>setname(e.target.value)}
        />
        <button style={custumstyle} onClick={()=>name!='' && switchstart(true,name)}>Start quiz</button>
    </div>
  )
}

export default Start