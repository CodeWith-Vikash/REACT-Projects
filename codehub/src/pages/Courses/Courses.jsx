import React, { useEffect, useState } from 'react'
import './Style.scss'
import Course from '../../components/Course/Course'
import { useSelector } from 'react-redux'
import { fetchdatafromapi } from '../../utils/api'

const Courses = () => {
  const [inputval, setinputval] = useState("")
  const {isdark}=useSelector((state)=>state.mainReducer.home)
  const [results, setresults] = useState([])
  const chanelids = ['UCeVMnSShP_Iviwkknt83cww','UCNQ6FEtztATuaVhZKCY28Yw','UCwfaAHy4zQUb2APNOGXUCCA'];
  
  const fetchdata=async()=>{
    let list=await Promise.all(chanelids.map((id)=> fetchdatafromapi(id)))
    let data=list.map((item=> item.filter((elem)=> elem.snippet.title.toLowerCase().includes('javascript') || elem.snippet.title.toLowerCase().includes('python'))))
    let subdata=[].concat(...list)
    // console.log(subdata);
    setresults(subdata)
  }

  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className={`courses ${isdark?'dark':'light'}`}>
      <input type="text" placeholder='search courses'
      value={inputval}
      onChange={(e)=> setinputval(e.target.value)}
      />
      <section>
      {results.filter((item)=> item.snippet.title.toLowerCase().includes(inputval.toLocaleLowerCase())).map((item)=>{
        return <Course key={item.id} title={item.snippet.title} desc={item.snippet.description} img={item.snippet.thumbnails.high.url} id={item.id}/>
      })}
      </section>
    </div>
  )
}

export default Courses