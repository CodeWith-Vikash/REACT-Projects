import React, { useEffect } from 'react'
import { useState } from 'react'
import Task from './components/Task'


const getlocalstorage=()=>{
    let data=localStorage.getItem('grocerry-data')
    if(data){
        return JSON.parse(data)
    }else{
        return []
    }
}
const App = () => {
   const [inputval, setinputval] = useState('')
   const [isediting,setisediting]= useState(false)
   const [list, setlist] = useState(getlocalstorage())
   const [task, settask] = useState('')
   const [id, setid] = useState()

   const additem=()=>{
      if(inputval==''){
         alert("can't add empty item")
      }else if(isediting){
        setlist(list.map((item,index)=>{
            if(index==id){
                return inputval
            }
            // the following code will run always freely
            return item
        }))
        setisediting(false)
        setinputval('')
      }else{
        setlist([...list,inputval])
        setinputval('')
      }
   }
   const deleteitem=(index)=>{
      let newlist=list.filter((item,i)=> i!=index)
      setlist(newlist)
   }
   const edititem=(index,item)=>{
       setisediting(true)
       setinputval(item)
       setid(index)
   }
   const clearlist=()=>{
       setlist([])
   }
   useEffect(()=>{
       localStorage.setItem('grocerry-data',JSON.stringify(list))
   },[list])
  return (
    <div className='bg-gray-700 min-h-screen flex justify-center py-20'>
        <div className="box bg-white w-fit px-8 h-fit rounded-md py-4">
             <h1 className='text-center font-bold text-gray-900 text-2xl my-8'>Grocerry bud</h1>
             <div className="input flex justify-center items-center gap-2">
                <input type="text" placeholder='Enter your task'
                  value={inputval} onChange={(e)=> setinputval(e.target.value)}
                 className='border-2 border-black rounded-lg outline-none px-2 py-1'/>
                <button className=' text-white px-4 py-2 rounded-lg font-bold' style={isediting?{backgroundColor:'blue'}:{backgroundColor:'green'}} onClick={additem}>{isediting?'Edit':'Add'}</button>
             </div>
             <section className="items py-4">
                    {list.map((item,index)=>{
                        return <Task task={item} index={index} deleteitem={deleteitem} edititem={edititem} key={item}/>
                    })}
                </section>
                {list.length>1?                <p className='text-center text-red-600 font-semibold cursor-pointer bg-slate-400 py-1 rounded' onClick={clearlist}>Clear list</p>:''}
        </div>
    </div>
  )
}

export default App