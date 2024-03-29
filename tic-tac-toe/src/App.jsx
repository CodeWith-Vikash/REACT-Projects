import React, { useEffect, useState } from 'react'

const App = () => {
   const [xturn, setxturn] = useState(true)
   const [win, setwin] = useState(false)
   const data=["","","","","","","","",""]
   console.log(data);
   const showmove=(e,num)=>{
       setxturn(!xturn)
       if(xturn){
          data[num]='❌'
          e.target.innerHTML=data[num]
        }else{
          data[num]='🟢'
          e.target.innerHTML=data[num]
       }
       checkwin()
   }

   const checkwin=()=>{
      if(data[0]==data[1] && data[1]==data[2]&& data[2]!=""){
          setwin(true)
          console.log('won');
      }else if(data[3]==data[4] && data[4]==data[5] && data[5]!=""){
        setwin(true)
        console.log('won');
    }else if(data[6]==data[7] && data[7]==data[8] && data[8]!=""){
      setwin(true)
      console.log('won');
  }else if(data[0]==data[3] && data[3]==data[6] && data[6]!=""){
    setwin(true)
    console.log('won');
}else if(data[1]==data[4] && data[4]==data[7] && data[7]!=""){
  setwin(true)
  console.log('won');
}else if(data[2]==data[5] && data[5]==data[8] && data[8]!=""){
  setwin(true)
  console.log('won');
}else if(data[0]==data[4] && data[4]==data[8] && data[8]!=""){
  setwin(true)
  console.log('won');
}else if(data[2]==data[4] && data[4]==data[6] && data[6]!=""){
  setwin(true)
  console.log('won');
}else{
   setwin(false)
}
   }
  if(win){
     alert('won')
  }
  useEffect(()=>{},[xturn])
  return (
    <div className='container'>
        <div className="game">
           <div className="box" onClick={(e)=> showmove(e,0)}></div>
           <div className="box" onClick={(e)=> showmove(e,1)}></div>
           <div className="box" onClick={(e)=> showmove(e,2)}></div>
           <div className="box" onClick={(e)=> showmove(e,3)}></div>
           <div className="box" onClick={(e)=> showmove(e,4)}></div>
           <div className="box" onClick={(e)=> showmove(e,5)}></div>
           <div className="box" onClick={(e)=> showmove(e,6)}></div>
           <div className="box" onClick={(e)=> showmove(e,7)}></div>
           <div className="box" onClick={(e)=> showmove(e,8)}></div>
        </div>
        <button>Reset</button>
    </div>
  )
}

export default App


