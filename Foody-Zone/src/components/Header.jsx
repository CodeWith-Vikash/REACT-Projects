import React, { useState } from 'react'
import Buttons from './Buttons'
import menu  from './Data'

const Header = ({filterFun}) => {
  const [catbtns, setcatbtns] = useState(Array.from(new Set(menu.map((item)=>item.category))))
  return (
    <div className='header'>
        <div className='head'>
            <h1>FOODY ZONE</h1>
            {/* <input type="text" placeholder='Search your food...'/> */}

            <div className="buttons">
              <Buttons text="all" category="all" filterFun={filterFun}/>
              {
                catbtns.map((btn)=>{
                  return <Buttons text={btn} category={btn} filterFun={filterFun}/>
                })
              }
            </div>
        </div>
    </div>
  )
}

export default Header