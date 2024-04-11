import React from 'react'

const Message = (text) => {
    console.log(text);
  return (
       <div>
          <div className='flex items-center gap-4 p-4'>
        <div>
            <img src="https://up.yimg.com/ib/th?id=OIP.umVFeuYa-emf28UMBkK37wHaHa&pid=Api&rs=1&c=1&qlt=95&w=115&h=115" className='rounded-full h-10'/>
            <p className='text-sm text-gray-800'>just now</p>
        </div>
        <div className='bg-white px-4 py-2 rounded-xl font-semibold max-w-[300px] rounded-tl-none'>{text.text}</div>
    </div>
    {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
    <div className='flex items-center gap-4 p-4 justify-end'>
       
        <div className='bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold max-w-[300px] rounded-tr-none'>No thanks i,m okay</div>
        <div>
            <img src="https://up.yimg.com/ib/th?id=OIP.7PFJ2-xr8x_3EprzHWmXAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=110&h=110" className='rounded-full h-10'/>
            <p className='text-sm text-gray-800'>just now</p>
        </div>
    </div>
       </div>
  )
}

export default Message