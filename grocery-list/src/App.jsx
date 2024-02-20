import React from 'react'

const App = () => {
  return (
    <div className='bg-gray-300 min-h-screen w-full flex justify-center'>
        <div className="box bg-white shadow-lg w-fit h-fit p-4 mt-[15vh] rounded-sm">
          <h1 className='text-center font-bold text-xl mb-4'>Grocery Bud</h1>
          <span id="alert" className='mb-2 p-2'></span>
          <input type="text" placeholder='e.g- fruits' className='pl-4 py-1 font-semibold outline-none bg-gray-200 rounded-sm'/>
          <button className='bg-blue-600 text-white rounded-sm px-2 py-1 mx-2'>Submit</button>

        </div>
    </div>
  )
}

export default App