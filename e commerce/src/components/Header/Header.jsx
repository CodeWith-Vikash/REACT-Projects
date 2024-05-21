import React, { useState } from 'react'
import { NavLink,useNavigate} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";

const Header = () => {
  const navigate=useNavigate()
  const [query, setquery] = useState('')

  const searchProduct=(e)=>{
      navigate(`/search/${query}`)
      setquery('')
  }
  return (
    <nav className='flex justify-between h-14 items-center px-3 sticky top-0 bg-gray-900 text-white z-40'>
      <NavLink to="/">
      <img src="/logo.png" alt="" className='h-10 shadow-xl'/>
      </NavLink>
      <div className='hidden items-center gap-6 font-semibold md:flex'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
      <section className='flex gap-6'>
          <div className='relative text-gray-900'>
            <input type="text" placeholder='Search....' className='outline-none border-none px-4 rounded-full w-[30vw] max-w-[250px] h-8'
              onChange={(e)=>setquery(e.target.value)}
              onKeyDown={(e)=> e.key=='Enter' && searchProduct()}
            />
            <FaSearch size="1rem" className='absolute right-2 top-[50%] translate-y-[-50%]' onClick={searchProduct}/>
          </div>
        <NavLink to="/cart">
           <HiShoppingCart size="1.5rem"/>
        </NavLink>
        <GiHamburgerMenu className='md:hidden cursor-pointer' size="1.5rem"/>
      </section>
    </nav>
  )
}

export default Header