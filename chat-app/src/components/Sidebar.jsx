import React, { useContext, useEffect, useState } from 'react'
import {signOut} from 'firebase/auth'
import { auth, db } from '../Firebase'
import { AppContext } from '../context/AuthContext'
import { collection, query, where,getDocs} from "firebase/firestore";

const Sidebar = () => {
    const {currentuser}=useContext(AppContext)
    const [username, setusername] = useState("")
    const [user, setuser] = useState(null)
    const [error, seterror] = useState(false)
    const [allusers, setallusers] = useState([])

    const handlekeydown=async (e)=>{
        if(e.code=="Enter"){
          const q=query(collection(db,"users"),where("displayName","==",username))
          try {
            const querySnapshot = await getDocs(q);
           querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
             setuser(doc.data())
            });
            seterror(false)
          } catch (aerror) {
            console.log(aerror);
             seterror(true)
          }
      }
    }
  return (
    <div className='sidebar text-white bg-violet-800 w-full h-[93vh]'>
        <nav className='flex gap-6 bg-violet-950 items-center px-2 h-[60px]'> 
            <b>Dev chat</b>
            <div className='flex gap-4 items-center'>
                <div className='flex gap-2 items-center pl-5 hover:bg-violet-950 py-2'>
                    <img src={currentuser.photoURL} className='h-8 rounded-full w-8'/>
                    <p className='text-sm'>{currentuser.displayName}</p>
                </div>
                <button className='bg-blue-800 px-2 h-7 rounded-lg text-sm' onClick={()=> signOut(auth)}>Logout</button>
            </div>
        </nav>
        <input type="text" placeholder="search friends" className='w-full outline-none text-black px-4 py-2 bg-gray-200' onChange={(e)=> setusername(e.target.value)} 
          onKeyDown={(e)=>handlekeydown(e)}
        />
        <section className='user-section  border-t-black overflow-auto h-[75vh]'>
            {error && <span>user not found</span>}
            {user && <div className='user flex gap-2 items-center pl-5 hover:bg-violet-950 py-2'>
            <img src={user.photoURL} className='h-10 rounded-full w-10'/>
            <div>
                <b>{user.displayName}</b>
            </div>
            </div>}
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
            <div className='user flex gap-2 items-center pl-5 hover:bg-violet-950 py-2'>
            <img src="https://up.yimg.com/ib/th?id=OIP.7PFJ2-xr8x_3EprzHWmXAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=110&h=110" className='h-10 rounded-full w-10'/>
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