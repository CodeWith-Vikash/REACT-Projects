import React, { useState } from 'react'
import { BiSolidImageAdd } from "react-icons/bi";
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth,storage,db } from '../Firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


const Register = () => {
  const [error, seterror] = useState(false)
  const handleSubmit=async (e)=>{
    e.preventDefault()
    const displayName=e.target[0].value
    const email=e.target[1].value
    const password=e.target[2].value
    const file=e.target[3].files[0]
    // console.log(username,email,password,image);
    try {
      let response=await createUserWithEmailAndPassword(auth, email, password)

const storageRef = ref(storage,displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:

uploadTask.on( 
  (error) => {
    seterror(true)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
         await updateProfile(response.user,{
           displayName,
           photoURL:downloadURL
         })
         await setDoc(doc(db,"users",response.user.uid),{
           displayName,
           photoURL:downloadURL,
           email,
           uid:response.user.uid
         })
    });
  }
);
    } catch (error) {
       seterror(true)
    }
    
  }

  return (
    <div className='bg-gray-900 h-screen flex justify-center items-center'>
        <form className=" bg-blue-600 p-4 rounded-lg" onSubmit={handleSubmit}>
            <input type="text" placeholder='Username'className='rounded-lg px-4 py-2 outline-none'/>
            <input type="email" placeholder='Email'className='rounded-lg px-4 py-2 outline-none'/>
            <input type="password" placeholder='password'className='rounded-lg px-4 py-2 outline-none'/>
            <input type="file" id='file'style={{display:"none"}}/>
            <label htmlFor="file" className='text-white font-semibold flex gap-2 cursor-pointer'>
                <BiSolidImageAdd size="2rem"/>
                <p>Add an avtar</p>
            </label>
            <button className='bg-violet-800 text-white font-semibold px-4 py-2 rounded-lg w-fit'>Register</button>
            {error && <p className='text-red-400'>something went wrong</p>}
            <p className='text-white'>Do you have an account?<span className='text-black'> login</span></p>
        </form>
    </div>
  )
}

export default Register