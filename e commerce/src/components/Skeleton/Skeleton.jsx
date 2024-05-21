import React from 'react'

const Skeleton = () => {
  return (
    <div className='w-[250px]  min-h-[250px] flex flex-col gap-2'>
              <div className='skeleton h-[200px] w-full '></div>
              <div className='skeleton h-5  w-[90%]'></div>
              <div className='skeleton h-5  w-[60%]'></div>
            </div>
  )
}

export default Skeleton