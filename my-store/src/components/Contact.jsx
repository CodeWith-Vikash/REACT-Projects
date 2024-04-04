import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
       <Navbar/>
       <div className='contact'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7234.373524746348!2d84.01825787740104!3d24.959759663586848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712196019295!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <form action='https://formspree.io/f/mnqegklv' method='post'>
          <input type="text"
           placeholder='username'
           name='username'
           required
           autoComplete='off'
           />
          <input type="email" 
          placeholder='Email'
          name='Email'
          required
          autoComplete='off'
          />
          <textarea cols="30" rows="5" 
          placeholder='message'
          name='Message'
          required
          autoComplete='off'
          ></textarea>
          <button>Send</button>
        </form>
    </div>
    <Footer/>
    </>
  )
}

export default Contact