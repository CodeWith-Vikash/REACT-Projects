import React from 'react'
import { useState } from 'react'

const App = () => {
  const [newTask, setnewTask] = useState("")
  const [todos, settodos] = useState([])
  const [inputval, setinputval] = useState("")
  const handleClick=()=>{
      if(newTask!=""){
        todos.push(newTask)
        setnewTask("")
        console.log(todos);
        localStorage.setItem("list",JSON.stringify(todos))
      }
  }
  let list=JSON.parse(localStorage.getItem("list"))

  return (
    <div className='min-h-screen w-full bg-gray-700 text-white'>
      <h1 className='text-center font-bold p-4 text-2xl text-yellow-500'>To Do List</h1>
      <section className='flex justify-center gap-2 mt-4'>
        <input type="text" placeholder='Enter task' className='outline-none text-black py-1 px-2 rounded'value={newTask} onChange={e =>setnewTask(e.currentTarget.value)}/>

        <button className='bg-green-600 px-4 py-1 font-semibold rounded' onClick={handleClick}>Add</button>
      </section>

      <section className='my-10 mx-auto w-fit'>{
        list.map((task,index)=>{
           return <div className='task flex justify-between items-center bg-pink-400 w-[50vw] px-4 py-2 rounded mb-2'>
           <div className='flex gap-1 items-center'>
           <span className='text-black text-lg font-semibold'>{task}</span>
           </div>
           <button className='bg-red-500 px-2 py-1 rounded font-semibold' onClick={()=>{
            let newtodos=[...todos]
            newtodos.splice(index,1)
            settodos(newtodos)
            localStorage.removeItem("list")
            localStorage.setItem("list",JSON.stringify(todos))
           }}>delete</button>
         </div>
        })
      }
      </section>
    </div>
  )
}

export default App