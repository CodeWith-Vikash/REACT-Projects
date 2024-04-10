import React, { useState } from 'react'
import { updateProfile } from "firebase/auth";
import { auth, storage, db } from '../Firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom"
import {signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const [error, setError] = useState(false);
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      signInWithEmailAndPassword(auth, email, password) 
      navigate("/")
      // console.log(response);

      // Uploading file to Firebase Storage
      const fileRef = ref(storage, `avatars/${response.user.uid}/${file.name}`);
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on('state_changed', 
        null, 
        (uploadError) => {
          setError(true);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // Updating user profile
            await updateProfile(auth.currentUser, {
              displayName,
              photoURL: downloadURL
            });

            // Creating user document in Firestore
            await setDoc(doc(db, "users", response.user.uid), {
              displayName,
              photoURL: downloadURL,
              email,
              uid: response.user.uid
            });
            await setDoc(doc(db,"userChats",response.user.uid),{})
            navigate("/")
          });
        }
      );
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className='bg-gray-900 h-screen flex justify-center items-center'>
        <form className=" bg-blue-600 p-4 rounded-lg" onSubmit={handleSubmit}>
            <input type="email" placeholder='Email'className='rounded-lg px-4 py-2 outline-none'/>
            <input type="password" placeholder='password'className='rounded-lg px-4 py-2 outline-none'/>
            <button className='bg-violet-800 text-white font-semibold px-4 py-2 rounded-lg w-fit'>Login</button>
            {error && <p className='text-red-400'>Something went wrong</p>}
            <p className='text-white'>you don't have an account?<Link to="/signup"><span className='text-black'>signup</span></Link></p>
        </form>
    </div>
  )
}

export default Login