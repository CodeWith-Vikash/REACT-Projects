import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate,useLocation} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";

const Header = () => {
  const location=useLocation()
  const [isfocus, setisfocus] = useState(false)
  const [isnav, setisnav] = useState(false)
  const navigate=useNavigate()
  const [query, setquery] = useState('')

  const searchProduct=(e)=>{
      navigate(`/search/${query}`)
      setquery('')
  }
  const togglenav=()=>{
    setisnav(!isnav)
  }
  useEffect(()=>{
    setisnav(false)
  },[location])
  return (
    <>
          <nav className='flex justify-between h-14 items-center px-3 md:sticky top-0 bg-gray-900 text-white z-40'>
      <NavLink to="/" className={`${isfocus && 'hidden'} md:block`}>
      <img src="/logo.png" alt="" className='h-10 shadow-xl'/>
      </NavLink>
      <div className='hidden items-center gap-6 font-semibold md:flex'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
      <section className='flex gap-6'>
          <div className='relative text-gray-900'>
            <input type="text" placeholder='Search..' className={`outline-none border-none px-4 rounded-full w-[30vw] md:w-[250px] h-8 ${isfocus && 'w-[95vw] md:w-[250px]'}`}
              value={query}
              onChange={(e)=>setquery(e.target.value)}
              onKeyDown={(e)=> e.key=='Enter' && searchProduct()}
              onFocus={()=> setisfocus(true)}
              onBlur={()=>{
                setTimeout(() => {
                  setisfocus(false)
                },100);
              }}
            />
            <FaSearch size="1rem" className='absolute right-2 top-[50%] translate-y-[-50%]' onClick={searchProduct}/>
          </div>
         
         <NavLink to="/cart" className={`${isfocus && 'hidden'} md:block`}>
           <HiShoppingCart size="1.5rem"/>
        </NavLink>
        <GiHamburgerMenu className='md:hidden cursor-pointer' size="1.5rem" onClick={togglenav} style={isfocus?{display:'none'}:null}/>
      </section>
    </nav>
    {/* 55555555555555555555555555555555555555555555 */}

    {isnav && <div className="subnav absolute h-[92vh] w-full bg-black bg-opacity-[0.5] top-14 right-0 flex justify-end">
        <div className='h-full w-52 bg-white flex flex-col gap-4 font-semibold items-center pt-10 text-xl'>
           <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
        </div>
    </div>}
    </>
  )
}

export default Header