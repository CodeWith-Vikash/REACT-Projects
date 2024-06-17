import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiEyeCloseFill } from "react-icons/ri";
import { RxEyeOpen } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth,db} from '../firebase/firebase'
import { setDoc,doc } from 'firebase/firestore';

const Login = () => {
  const [isopen, setisopen] = useState(false)
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const passwordref=useRef(null)
  const navigate=useNavigate()

  const toggleye=()=>{
    setisopen(!isopen)
    if(passwordref.current.getAttribute('type')=='password'){
       passwordref.current.setAttribute('type','text')
      }else{
      passwordref.current.setAttribute('type','password')
    }
  }

  const handleLogin = async (e) => {
    setLoading(true)
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
  
    try {
      // Sign in the user
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
      // Proceed if sign-in is successful
      navigate("/");
  
      // Uploading file to Firebase Storage
      const fileRef = ref(storage, `avatars/${userCredential.user.uid}/${file.name}`);
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
            await setDoc(doc(db, "users", userCredential.user.uid), {
              displayName,
              photoURL: downloadURL,
              email,
              uid: userCredential.user.uid
            });
            await setDoc(doc(db,"userChats",userCredential.user.uid),{})
            navigate("/");
          });
        }
      );
    } catch (error) {
      setError(true);
      setLoading(false)
    }
  };
  return (
    <div className="h-screen bg-zinc-800 flex justify-center items-center">
      <div className="w-[300px] h-fit bg-white text-black rounded-lg p-4 flex flex-col items-center gap-4">
        <img src="/logo.png" alt="" className="w-16" />
        <p className='text-red-500'>{error && 'something went wrong'}</p>
      <form className="flex flex-col gap-3" onSubmit={handleLogin}>
        <input type="email" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Email"/>
        <div className="relative">
        <input type="password" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Password" ref={passwordref}/>
        {isopen? <RxEyeOpen  className="absolute top-3 right-3 cursor-pointer"size="1.3rem" onClick={toggleye}/> : <RiEyeCloseFill className="absolute top-3 right-3 cursor-pointer"size="1.3rem" onClick={toggleye}/>}
        </div>
        <button className="bg-black text-white font-semibold py-1 px-2 rounded">{loading?'Loging...':'Login'}</button>
        <p>you don't have an account ? <NavLink to="/signup">
        <b>signup</b>
          </NavLink></p>
      </form>
      </div>
    </div>
  )
}

export default Login