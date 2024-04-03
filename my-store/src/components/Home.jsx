import React from 'react'
import heroimg from './images/hero.jpg'
import Product from './Product'
import Data from './Data'
import Navbar from './Navbar'
import Footer from './Footer'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
     <Navbar/>
     <section className='home parent'>
       <section className="hero">
         <div className="hero-content">
          <span>Welcome To,</span>
          <h1>Dev Shops</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus facilis quasi consequuntur perspiciatis. Quidem laudantium .</p>
          <button>Shop Now</button>
         </div>
         <img src={heroimg}/>
       </section>
       {/* explore sale */}
       <section className="explore">
        <div className="explore-title">
        <p>Check Now!</p>
        <h3>Summer sales are here</h3>
        </div>
       <div className="sale">
         {Data.filter((item)=> item.id<4).map((item)=>{
             return <NavLink to="/singleprod"><Product name={item.productName} price={item.price} img={item.image}/></NavLink>
         })}
       </div>
       </section>
       {/* features */}
       <section className="features-container">
        <div className="features">
        <div className="feature f1">
          <TbTruckDelivery className='icon' size="2rem"/>
          <p>superfast and free delivery</p>
         </div>
         <div className="feature f2">
          <MdOutlineSecurity className='icon' size="2rem"/>
          <p>No-contact shipping</p>
         </div>
         <div className="feature f3">
          <GiTakeMyMoney className='icon' size="2rem"/>
          <p>Money back guarenty</p>
         </div>
         <div className="feature f4">
          <MdSystemSecurityUpdateGood className='icon' size="1.5rem"/>
          <p>supersequre payment system</p>
         </div>
        </div>
       </section>
       {/* companies */}
       <section className="trust">
         <b>Trusted by 1000+ companies</b>
         <div className="companies">
          <img src="src\components\images\logo1.jfif"/>
          <img src="src\components\images\logo2.jfif"/>
          <img src="src\components\images\logo3.jfif"/>
          <img src="src\components\images\logo4.jfif"/>
         </div>
       </section>
    </section>
     <Footer/>
    </>
  )
}

export default Home