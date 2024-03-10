import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [length, setlength] = useState(8)
  const [checknum, setchecknum] = useState(false)
  const [checkchar, setcheckchar] = useState(false)
  const [password, setpassword] = useState()
  let str='abcdefghijklmnopqrstuvwxyz'
  let num='1234567890'
  let char='!@#$%^&?'
  // useref hook to get password refrence
  const passwordRef=useRef(null)
  const generatepassword=()=>{
    if(checknum){
      str=str+num
    }
    if(checkchar){
      str=str+char
    }
    let genpass='';
    for(let i=0;i<length;i++){
       let random=Math.floor(Math.random()*(str.length-1))
       genpass+=str[random]
       console.log(str);
       console.log(random);
       console.log(genpass);
     }
     setpassword(genpass)
  }

  useEffect(()=>{
    generatepassword()
  },[length,checknum,checkchar])

  const copyPassword=()=>{
    passwordRef.current.select()
    navigator.clipboard.writeText(password)
  }

  return (
    <div className='container'>
      <div className="box">
        <div className="inputbox">
          <input type="text" readOnly value={password} ref={passwordRef}/>
          <button onClick={copyPassword}>copy</button>
        </div>
        <div className="modify">
          <div className="range chose">
            <input type="range" max={20} min={8} value={length}
             onChange={(e)=> setlength(e.target.value)}
            />
            <label>Length :{length}</label>
          </div>
          <div className="number chose">
            <input type="checkbox" value={checknum} 
             onChange={e => setchecknum(!checknum)}
            />
            <label>Number</label>
          </div>
          <div className="char chose">
            <input type="checkbox" value={checkchar} 
             onChange={e => setcheckchar(!checkchar)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App