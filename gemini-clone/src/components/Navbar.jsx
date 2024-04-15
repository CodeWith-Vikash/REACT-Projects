import React, { useContext } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { Aicontext } from '../config/gemini';


const Navbar = () => {
  const {toggleMode,islight}=useContext(Aicontext)
  return (
    <div className='flex justify-between items-center px-6 py-4 shadow-md 'style={islight?{backgroundColor:"white",color:"black"}:null}>
        <div className='flex gap-3 items-center'>
            <GiHamburgerMenu size="1.5rem" className='cursor-pointer'/>
            <h1 className='text-xl font-semibold font-sans'>Jarvis</h1>
        </div>
        <div className='flex gap-4 items-center'>
        <MdDarkMode size="2rem" className='cursor-pointer' onClick={toggleMode}/>
        <img src="https://tse1.mm.bing.net/th?id=OIP.-4nY2ID2ybM6f3UnHOPaeQHaFj&pid=Api&P=0&h=220" className='h-10 w-10 rounded-full'/>
        </div>
    </div>
  )
}

export default Navbar