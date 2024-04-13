import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../firebase';
import { NavLink } from 'react-router-dom';

const Search = () => {
  const [inputVal, setInputVal] = useState("vikash");
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const userData = await getDoc(doc(db, "data", inputVal));
      if (userData.exists()) {
        setData(userData.data());
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='h-screen bg-gray-600 flex pt-10 gap-10 items-center flex-col'>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder='Search user'
          className='px-4 rounded-lg outline-none'
          autoFocus
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button className='bg-red-600 text-white rounded-lg p-2' onClick={getData}>Search</button>
      </div>
      <section className='bg-white flex flex-col gap-3 p-6 rounded-lg min-h-[50vh] w-[300px] '>
        {isLoading ? (
          <b className='text-green-500 text-center'>Loading...</b>
        ) : error ? (
          <>
          <span className='text-red-600 font-semibold text-center'>Data not found</span>
          <br />
          <p>Do you want to add data? <NavLink to="/" className="text-red-600">Form</NavLink></p>
          </>
        ) : (
          <div>
            <img src={data.imageurl} className='h-[100px] w-[100px] my-0 mx-auto rounded-full'/>
            <div className='flex flex-col gap-3'>
              <p><b>Name</b> : {data.name}</p>
              <p><b>Email</b> : {data.email}</p>
              <p><b>Contact</b> : {data.phone}</p>
              <p><b>Address</b> : {data.address}</p>
              <p><b>Message</b>: {data.message}</p>
              <p>Do you want to add data? <NavLink to="/" className="text-red-600">Form</NavLink></p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Search;
