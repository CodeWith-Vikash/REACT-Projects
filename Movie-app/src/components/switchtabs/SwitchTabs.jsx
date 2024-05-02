import React, { useEffect, useRef, useState } from 'react'
import './Style.scss'

const SwitchTabs = ({tabs,onTabChange}) => {
    let activeref=useRef(null)
    const [activetab, setactivetab] = useState(0)
    const [selectedside, setselectedside] = useState('left')
    const handleSwitch=(index)=>{
        setactivetab(index)
    }

    const handletransform=()=>{
        if(selectedside=='left'){
            activeref.current.style.transform='translateX(94%)'
            setselectedside('right')
        }else{
            activeref.current.style.transform='translateX(0%)'
            setselectedside('left')
        }
    }
     useEffect(()=>{
        onTabChange(activetab)
     },[activetab])
  return (
    <>
      <div className='switchtab'>{
        tabs.map((tab,index)=>{
            return <p className={activetab==index?'active':"tab"}
             onClick={(e)=> {
                handleSwitch(index)
                if(e.target.className=="tab"){
                    handletransform()
                }
             }}
             key={index}
            >{tab}</p>
        })
    }
    <div className="activetab" ref={activeref}></div>
    </div>
    </>
  )
}

export default SwitchTabs