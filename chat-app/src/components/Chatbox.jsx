import React, { useContext, useEffect, useState } from 'react'
import { BiSolidImageAdd } from "react-icons/bi";
import { IoIosVideocam } from "react-icons/io";
import { RiUserAddFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineAttachFile } from "react-icons/md";
import Message from './Message';
import { ChatContext } from '../context/Chatcontext';
import { Timestamp, arrayUnion, doc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db,storage } from '../Firebase';
import { AppContext } from '../context/AuthContext';
import {v4 as uuid} from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Chatbox = () => {
  const {currentuser}=useContext(AppContext)
  const {data}=useContext(ChatContext)
  const [Messages, setMessages] = useState([])
  const [inputtext, setinputtext] = useState("")
  const [inputimg, setinputimg] = useState(false)
  console.log(data);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats",data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);
  console.log(Messages);

  const handlesend=async ()=>{
    if(inputimg){
      const fileRef = ref(storage,uuid());
      const uploadTask = uploadBytesResumable(fileRef, inputimg);


      uploadTask.on('state_changed', 
      null, 
      (uploadError) => {
        // setError(true);
        console.log(uploadError);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateDoc(doc(db,"chats",data.chatId),{
            messages:arrayUnion({
              id:uuid(),
              inputtext,
              senderId:currentuser.uid,
              date:Timestamp.now(),
              img:downloadURL,
            })
          })
        });
      }
    );
    }else{
      await updateDoc(doc(db,"chats",data.chatId),{
        messages:arrayUnion({
          id:uuid(),
          inputtext,
          senderId:currentuser.uid,
          date:Timestamp.now(),
        })
      })
    }

    await updateDoc(doc(db,"userChats",data.user.uid),{
      [data.chatId+".lastMessage"]:{
        inputtext,
      },
      [data.chatId+".date"]:serverTimestamp(),
    })

    setinputimg(null)
    setinputtext("")
  }
  return (
    <div className='chatbox bg-gray-400 h-[93.3vh]'>
        <header className='bg-violet-600 text-white px-6 h-[60px] flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
               <img src={data.user?.photoURL} className='h-10 w-10 rounded-full'/>
               <b className='text-lg'>{data.user?.displayName}</b>
            </div>
            <div className='flex gap-4 items-center'>
              <IoIosVideocam size="1.5rem" style={{cursor:"pointer"}}/>
              <RiUserAddFill size="1.5rem" style={{cursor:"pointer"}}/>
              <BsThreeDots size="1.5rem" style={{cursor:"pointer"}}/>
            </div>
        </header>
        <main className='overflow-auto h-[73vh] message-container p-4'>
            {Messages?.map((m)=>{
               return <Message key={m.id} message={m}/>
            })}
        </main>
        <footer className='h-[60px] bg-white flex justify-between items-center px-4 w-[100vw]'>
            <input type="text" placeholder='write something....' className='outline-none bg-transparent px-4 py-2 w-[50vw]'
             value={inputtext}
              onChange={e=>setinputtext(e.target.value)}
            />
            <div className='flex items-center gap-4'>
                <input type="file" id='attach' style={{display:"none"}} onChange={e=>setinputimg(e.target.files[0])}/>
                <label htmlFor="attach">
                    <MdOutlineAttachFile size="1.5rem" color='gray' style={{cursor:'pointer'}}/>
                </label>
                <input type="file" id='image'  style={{display:"none"}} onChange={e=>setinputimg(e.target.files[0])}/>
                <label htmlFor="image">
                    <BiSolidImageAdd size="1.5rem" color='gray' style={{cursor:'pointer'}}/>
                </label>
                <button className='h-7 bg-green-600 text-white px-2 rounded' onClick={handlesend}>send</button>
            </div>
        </footer>
    </div>
  )
}

export default Chatbox