import React, { useState } from 'react'

const Note = ({savenotes}) => {
    const [words, setwords] = useState(200)
    const [inputval, setinputval] = useState('')
  return (
    <div className='note'>
        <textarea cols="30" rows="10" placeholder='write your note here..' value={inputval} onChange={(e)=> {if(e.target.value.length<=200){
          setinputval(e.target.value)
        }}} onKeyDown={(e)=>{
           if(e.key == 'Backspace'){
              if(words<200){
                setwords(words+1)
              }
           }else{
              if(words>0){
                setwords(words-1)
              }
           }
        }} autoFocus></textarea>
       <div className="textelem">
       <span>Character remaining {words}</span>
        <button onClick={()=> savenotes(inputval,setinputval,setwords)}>save</button>
       </div>
    </div>
  )
}

export default Note