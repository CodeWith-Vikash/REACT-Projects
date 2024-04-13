import { Timestamp, doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { NavLink } from 'react-router-dom';
import { BiSolidImageAdd } from "react-icons/bi";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Input = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const address = e.target[3].value;
    const message = e.target[4].value;
    const imageFile = e.target[5].files[0];

    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const formData = {
            name,
            email,
            phone,
            address,
            message,
            date: Timestamp.fromDate(new Date()),
            imageurl: downloadURL
          };
          await setDoc(doc(db, "data", name), formData);
          console.log(formData);
        });
      }
    );
  };

  return (
    <div className='bg-gray-600 min-h-screen flex justify-center items-center'> 
      <form className='bg-white p-10 rounded-lg flex flex-col gap-8 m-6 max-w-[600px]' onSubmit={(e) => handleSubmit(e)}>
        <h1 className='font-semibold text-xl'>Register Data</h1>
        <section className='flex flex-wrap gap-5'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-sm text-gray-300'>Your name</label>
            <input type="text" placeholder='Enter your name' className='outline-none border-b-2 border-zinc-200 p-2'/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-sm text-gray-300'>Email</label>
            <input type="text" placeholder='Enter your Email' className='outline-none border-b-2 border-zinc-200 p-2'/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-sm text-gray-300'>Phone Number</label>
            <input type="text" placeholder='Enter your contact no.' className='outline-none border-b-2 border-zinc-200 p-2'/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-sm text-gray-300'>Address</label>
            <input type="text" placeholder='Enter your address' className='outline-none border-b-2 border-zinc-200 p-2'/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-sm text-gray-300'>Message</label>
            <textarea cols="30" rows="5" placeholder='your message here..' className='outline-none border-b-2 border-zinc-200 p-2'></textarea>
          </div>
          <div>
            <label htmlFor="image" className='flex items-center gap-2 cursor-pointer'><BiSolidImageAdd size="2rem" color='red'/><span>Add your profile pic</span></label>
            <input type="file" id='image' className='hidden'/>
          </div>
        </section>
        <NavLink to="/search"><button className='bg-red-600 text-white rounded-lg py-2 px-4'>Submit</button></NavLink>
        <p>Do you want to search data ? <NavLink to="/search" className="text-red-600">Search</NavLink></p>
      </form>
    </div>
  );
}

export default Input;
