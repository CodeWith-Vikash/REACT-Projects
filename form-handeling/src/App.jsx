import React from 'react'
import Tag from './Components/Tag'
import Textbox from './Components/Textbox'

const App = () => {
  return (
    <div className=' min-h-screen w-full'>
      <nav className='px-4 py-2'>
        <img src="logo.png" className='h-18'/>
      </nav>
      <section className='pl-[10vw] mt-8'>
        <div>
        <h1 className='font-bold text-4xl font-serif'>Contact us</h1>
        <p className='leading-5 w-[500px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore asperiores a assumenda. Nesciunt architecto fugiat, ipsa, molestiae ab fugit iste adipisci magni fuga.</p>
        </div>

         <section className='main mt-4'>
          <div>
            <Tag text="Via support chat"/>
            <Tag text="Via call"/>
            <br />
            <br />
            <b className='border-2 border-black px-12 py-1 ml-10'>Via Email Form</b>
            <form action="submit" className='pt-4'>
              <Textbox/>
              <Tag text="Submit"/>
            </form>
          </div>
          <img src="contact.svg" alt="" className='h-[60vh] image'/>
         </section>
      </section>
    </div>
  )
}

export default App