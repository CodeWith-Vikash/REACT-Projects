import React, { useEffect, useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import Note from './components/Note';
import {nanoid} from 'nanoid'
import SavedNote from './components/SavedNote';


const lightmode={
   backgroundColor:'white',
   color:'black'
}
// fetching data from localstorage
 const getlocalstorage=()=>{
      let data=localStorage.getItem('notes-app-data')
      if(data){
         return JSON.parse(data)
      }else{
         return []
      }
 }
const App = () => {
  const [islight, setislight] = useState(false)
  const [searchval, setsearchval] = useState('')
  const [notes, setnotes] = useState(getlocalstorage())
  // fuction to toggle dark mode
  const toggle=()=>{
    setislight(!islight)
  }
  // function to save notes
  const savenotes=(content,setinputval,setwords)=>{
      if(content==''){
         alert("can't add empty note")
      }else{
        let currentdate=new Date()
        let newnote={
           id:nanoid(),
           text:content,
           date:String(`${currentdate.getDate()}/${currentdate.getMonth()+1}/${currentdate.getFullYear()}`)
        }
        let tempnotes=[...notes]
        tempnotes.push(newnote)
        setnotes(tempnotes)
        setinputval('')
        setwords(200)
       // console.log(tempnotes);
      }
  }
  // function to delete note
  const deletenote=(index)=>{
     let tempnotes=[...notes]
     tempnotes.splice(index,1)
     setnotes(tempnotes)
     console.log('delete rendered');
  }
  // saving data to localstorange
  useEffect(()=>{
     localStorage.setItem('notes-app-data',JSON.stringify(notes))
  },[notes])

  return (
    <div className='container' style={islight?lightmode:null}>
       <nav>
         <h1>Notes</h1>
         <div><MdDarkMode className='icon' onClick={toggle} size='3rem'/></div>
       </nav>
       <input type="text" placeholder='search note' value={searchval} onChange={(e)=> setsearchval(e.target.value)}/>
       <main>
        {notes.filter((item)=>item.text.toLowerCase().startsWith(searchval.toLowerCase())).map((note,index)=>( 
              <SavedNote text={note.text} date={note.date} id={note.id} key={note.id} deletenote={deletenote} index={index}/>
        ))}
         <Note savenotes={savenotes}/> 
       </main>
    </div>
  )
}

export default App