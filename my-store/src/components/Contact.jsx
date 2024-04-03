import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
       <Navbar/>
       <div className='contact'>
        <img src="src\components\images\pexels-aaditya-arora-592753.jpg"/>
        <form>
          <input type="text" placeholder='username'/>
          <input type="email" placeholder='Email'/>
          <textarea cols="30" rows="5" placeholder='message'></textarea>
          <button>Send</button>
        </form>
    </div>
    <Footer/>
    </>
  )
}

export default Contact