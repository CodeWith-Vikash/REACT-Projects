import React, { useEffect,useState } from 'react'
import Pokemons from './components/Pokemons'
import Card from './components/Card'
import { useDispatch } from 'react-redux'
import {fetchdata} from './data/pokeSlice'
import { useSelector } from 'react-redux'
import song from './music.mp3'

const App = () => {
  const dispatch=useDispatch()
  const [allpokemons, setallpokemons] = useState([])
  const [singlepokedata, setsinglepokedata] = useState()
  const [nexturl, setnexturl] = useState("")
  const [preurl, setpreurl] = useState("")
   let data=useSelector((state)=>state.data)
   let isloading=useSelector((state)=>state.isloading)
   let iserror=useSelector((state)=>state.iserror)

   const getpokedata=(item)=>{
       setallpokemons([])
       setnexturl(item.next)
       setpreurl(item.previous)
       item.results.map(async(elem)=>{
         let response=await fetch(elem.url)
         let pokedata=await response.json()
         setallpokemons((pre)=>{
            pre= [...pre,pokedata]
            pre.sort((a,b)=> a.id-b.id)

            let state=Array.from (new Set(pre))
 
            return state
         })
        //  console.log(pokedata);
       })
   }

   const fetchnextdata=async()=>{
       let response = await fetch(nexturl)
       let mainres=await response.json()
       if(mainres.previous){
         setpreurl(mainres.previous)
       }
       setallpokemons([])
       getpokedata(mainres)
       if(mainres.next){
           setnexturl(mainres.next)
       }
       console.log('nextdata',mainres);
   }

   const fetchpredata=async ()=>{
       setallpokemons([])
        let res=await fetch(preurl)
        let response=await res.json()
        if(response.previous){
          setpreurl(response.previous)
        }
        
        setallpokemons([])
        getpokedata(response)
        if(response.next){
            setnexturl(response.next)
        }
        console.log('priviousdata',response);
   }

   useEffect(()=>{
    dispatch(fetchdata())
    new Audio(song).play()
  },[])

  useEffect(()=>{
    if(data){
      getpokedata(data)
      // console.log(data);
     }
  },[data])
  return (
    <div className='h-screen bg-gray-800 text-white md:flex'>
      <section className='h-[55vh] md:w-[50vw] md:h-screen flex items-center justify-center'>
        {singlepokedata && <Card data={singlepokedata}/>}
      </section>

      <section className='h-[45vh] overflow-auto md:w-[50vw] md:h-screen flex flex-col justify-between pt-10'>
        <Pokemons allpokemons={allpokemons} data="" setsingle={setsinglepokedata} isloading={isloading} iserror={iserror}/>
      <div className="py-2  w-full h-16 flex items-center justify-center">
        <div className='flex items-center gap-4'>
        {preurl && <button className='bg-red-800 py-1 font-semibold px-4 rounded-md' onClick={fetchpredata}>previous</button>}

        {nexturl && <button className='bg-red-800 py-1 font-semibold px-4 rounded-md' onClick={()=>{
          setallpokemons([])
          fetchnextdata()
        }}>Next</button>}
        </div>
      </div>
      </section>
    </div>
  )
}

export default App