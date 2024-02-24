import React from 'react'
import Buttons from './Buttons'

const Header = () => {
  return (
    <div className='header'>
        <div className='head'>
            <h1>FOODY ZONE</h1>
            <input type="text" placeholder='Search your food...'/>
            <div className="buttons">
            <Buttons text="All"/>
            <Buttons text="Breakfast"/>
            <Buttons text="Lunch"/>
            <Buttons text="Dinner"/>
            </div>
        </div>
    </div>
  )
}

export default Header