import React, { useContext, useEffect, useState } from 'react'
import {signOut} from 'firebase/auth'
import { auth, db } from '../Firebase'
import { AppContext } from '../context/AuthContext'
import { collection, query, where,getDocs, setDoc, updateDoc, serverTimestamp,getDoc,doc, onSnapshot} from "firebase/firestore";
import { ChatContext } from '../context/Chatcontext';

const Sidebar = () => {
    const {dispatch}=useContext(ChatContext)
    const {currentuser}=useContext(AppContext)
    const [username, setusername] = useState("")
    const [user, setuser] = useState(null)
    const [error, seterror] = useState(false)
    const [chats, setchats] = useState([])

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
    const handleSelect=async ()=>{
      const combinedid=currentuser.uid>user.uid?currentuser.uid+user.uid:user.uid+currentuser.uid
      try {
        const docRef = doc(db, "chats", combinedid);
        const res = await getDoc(docRef);
         if(!res.exists()){
            await setDoc(docRef,{"messages":[]})

            // create userchats for first
            await updateDoc(doc(db,"userChats",currentuser.uid),{
              [combinedid+".userinfo"]:{
                uid:user.uid,
                displayName:user.displayName,
                photoURL:user.photoURL
              },
              [combinedid+".date"]:serverTimestamp()
            })
            // for second
            await updateDoc(doc(db,"userChats",user.uid),{
              [combinedid+".userinfo"]:{
                uid:currentuser.uid,
                displayName:currentuser.displayName,
                photoURL:currentuser.photoURL
              },
              [combinedid+".date"]:serverTimestamp()
            })
         }
        
       } catch (err) {
           console.log(err);
       }
       setuser(null)
       setusername("")
    }
    useEffect(()=>{
      const getchats=()=>{
         const unsub=onSnapshot(doc(db,'userChats',currentuser.uid),(doc)=>{
             setchats(doc.data())
         })
         return ()=>{
            unsub()
         }
      }
      currentuser.uid && getchats()
    },[currentuser.uid])
    console.log(Object.entries(chats));

    const handleselected=(u)=>{
      dispatch({type:"CHANGE_USER",payload:u})
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
        <input type="text" placeholder="search registered users ex:- vikash" className='w-full outline-none text-black px-4 py-2 bg-gray-200'value={username} onChange={(e)=> setusername(e.target.value)} 
          onKeyDown={(e)=>handlekeydown(e)}
        />
        <section className='user-section  border-t-black overflow-auto h-[75vh]'>
            {error && <span>user not found</span>}
            {user && <div className='user flex gap-2 items-center pl-5 hover:bg-violet-950 py-2' onClick={handleSelect}>
            <img src={user.photoURL} className='h-10 rounded-full w-10'/>
            <div>
                <b>{user.displayName}</b>
            </div>
            </div>}
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
            {Object.entries(chats).sort((a,b)=>{
              return b[1].date - a[1].date
            })?.map((item)=>{
               return  <div className='user flex gap-2 items-center pl-5 hover:bg-violet-950 py-2' key={item[0]} onClick={()=>handleselected(item[1].userinfo)}>
               <img src={item[1].userinfo.photoURL} className='h-10 rounded-full w-10'/>
               <div>
                   <b>{item[1].userinfo.displayName}</b>
                   {/* <p className='text-sm'>{item[1].lastMessage.inputtext && item[1].lastMessage.inputtext}</p> */}
               </div>
               </div>
            })}
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
        </section>
    </div>
  )
}

export default Sidebar