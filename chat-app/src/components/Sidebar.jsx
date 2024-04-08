import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar text-white bg-violet-800 w-fit h-[93vh]'>
        <nav className='flex gap-6 bg-violet-950 items-center px-2 h-[60px]'> 
            <b>Dev chat</b>
            <div className='flex gap-4 items-center'>
                <div className='flex gap-2 items-center pl-5 hover:bg-violet-950 py-2'>
                    <img src="https://up.yimg.com/ib/th?id=OIP.umVFeuYa-emf28UMBkK37wHaHa&pid=Api&rs=1&c=1&qlt=95&w=115&h=115" className='h-7 rounded-full'/>
                    <p className='text-sm'>Angelina jets</p>
                </div>
                <button className='bg-blue-800 px-2 h-7 rounded-lg text-sm'>Logout</button>
            </div>
        </nav>
        <input type="text" placeholder="search friends" className='w-full outline-none text-black px-4 py-2 bg-gray-200'/>
        <section className='user-section  border-t-black'>
            <div className='user flex gap-2 items-center pl-5 hover:bg-violet-950 py-2'>
            <img src="https://up.yimg.com/ib/th?id=OIP.7PFJ2-xr8x_3EprzHWmXAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=110&h=110" className='h-10 rounded-full'/>
            <div>
                <b>Tyler</b>
                <p>see you later</p>
            </div>
            </div>
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
            <div className='user flex gap-2 items-center pl-5 hover:bg-violet-950 py-2'>
            <img src="https://up.yimg.com/ib/th?id=OIP.7PFJ2-xr8x_3EprzHWmXAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=110&h=110" className='h-10 rounded-full'/>
            <div>
                <b>Tyler</b>
                <p>see you later</p>
            </div>
            </div>
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
            <div className='user flex gap-2 items-center pl-5 hover:bg-violet-950 py-2'>
            <img src="https://up.yimg.com/ib/th?id=OIP.7PFJ2-xr8x_3EprzHWmXAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=110&h=110" className='h-10 rounded-full'/>
            <div>
                <b>Tyler</b>
                <p>see you later</p>
            </div>
            </div>
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
            <div className='user flex gap-2 items-center pl-5 hover:bg-violet-950 py-2'>
            <img src="https://up.yimg.com/ib/th?id=OIP.7PFJ2-xr8x_3EprzHWmXAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=110&h=110" className='h-10 rounded-full'/>
            <div>
                <b>Tyler</b>
                <p>see you later</p>
            </div>
            </div>
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
        </section>
    </div>
  )
}

export default Sidebar