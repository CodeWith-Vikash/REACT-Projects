import React, { useRef, useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { RiEyeCloseFill } from "react-icons/ri";
import { RxEyeOpen } from "react-icons/rx";
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import Upload from "../firebase/uploadAvatar";

const Signup = () => {
  const [isopen, setisopen] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const passwordref = useRef(null);

  const toggleye = () => {
    setisopen(!isopen);
    if (passwordref.current.getAttribute('type') === 'password') {
      passwordref.current.setAttribute('type', 'text');
    } else {
      passwordref.current.setAttribute('type', 'password');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const username = formdata.get("username");
    const email = formdata.get("email");
    const password = formdata.get("password");
    const file = formdata.get("file");

    if (!username || !email || !password || !file) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = await Upload(file);
      
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: []
      });

      await setDoc(doc(db, "userChat", res.user.uid), {
        chats: []
      });

      alert("Successfully registered. You can log in now.");
    } catch (error) {
      console.error("Authentication error: ", error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-zinc-800 flex justify-center items-center">
      <div className="w-[300px] h-fit bg-white text-black rounded-lg p-4 flex flex-col items-center gap-4">
        <img src="/logo.png" alt="logo" className="w-16" />
        {error && <p className="text-red-500">{error}</p>}
        <form className="flex flex-col gap-3" onSubmit={handleRegister}>
          <input type="text" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Username" name="username" />
          <input type="email" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Email" name="email" />
          <div className="relative">
            <input type="password" className="bg-gray-300 p-2 rounded-lg w-[270px] outline-none" placeholder="Password" name="password" ref={passwordref} />
            {isopen ? (
              <RxEyeOpen className="absolute top-3 right-3 cursor-pointer" size="1.3rem" onClick={toggleye} />
            ) : (
              <RiEyeCloseFill className="absolute top-3 right-3 cursor-pointer" size="1.3rem" onClick={toggleye} />
            )}
          </div>
          <input type="file" id="file" className="hidden" name="file" />
          <label htmlFor="file" className="flex items-center gap-2 cursor-pointer">
            <BiSolidImageAdd size="1.7rem" />
            <b>Add an avatar</b>
          </label>
          <button type="submit" className="bg-black text-white font-semibold py-1 px-2 rounded" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
          <p>
            You already have an account? <NavLink to="/login">
              <b>Login</b>
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
