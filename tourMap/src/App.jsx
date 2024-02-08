 import React from 'react'
import Main from './components/Main'
 
 const App = () => {
   return (
     <div className='min-h-screen w-full bg-gray-300 p-4'>
      <h2 className='text-center font-semibold text-4xl mb-4 relative'>Our Tours</h2>
      {/* <div className="underline bg-blue-700 h-1 w-[18vw] absolute top-14 left-52 rounded-full"></div> */}
      <div className='flex justify-center'>
        <Main/>
      </div>
     </div>
   )
 }
 
 export default App