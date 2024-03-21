import React from 'react'
import { useApp } from '../Context'

const Sidebar = () => {
  const {issidebar,openSidebar,closeSidebar}=useApp()
  return (
     <div className='side'>
         <div className={issidebar?'sidebar slide':'sidebar'}>
            <div className="nav">
            <h1>Context Api</h1>
            <span onClick={closeSidebar}>❌</span>
            </div>
            <div className="options">
            <div className="option">
                <span>📷</span>
                <p>Random text</p>
            </div>
            <div className="option">
                <span>📷</span>
                <p>Random text</p>
            </div>
            <div className="option">
                <span>📷</span>
                <p>Random text</p>
            </div>
            <div className="option">
                <span>📷</span>
                <p>Random text</p>
            </div>
            <div className="option">
                <span>📷</span>
                <p>Random text</p>
            </div>
            <div className="option">
                <span>📷</span>
                <p>Random text</p>
            </div>
            </div>
        </div>
        <span className={issidebar?'ham hamhide':'ham'} onClick={openSidebar}>🍔</span>
     </div>
  )
}

export default Sidebar