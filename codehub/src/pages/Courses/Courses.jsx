import React, { useEffect, useState } from 'react'
import './Style.scss'
import Course from '../../components/Course/Course'
import { useSelector } from 'react-redux'
import { fetchdatafromapi } from '../../utils/api'

const Courses = () => {
  const {isdark}=useSelector((state)=>state.mainReducer.home)
  const [results, setresults] = useState([])
  const chanelids = ['UCeVMnSShP_Iviwkknt83cww','UCNQ6FEtztATuaVhZKCY28Yw'];
  
  const fetchdata=async()=>{
    let list=await Promise.all(chanelids.map((id)=> fetchdatafromapi(id)))
    let data=list.map((item=> item.filter((elem)=> elem.snippet.title.toLowerCase().includes('javascript') || elem.snippet.title.toLowerCase().includes('python'))))
    let subdata=[].concat(...data)
    console.log(subdata);
    setresults(subdata)
  }

  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className={`courses ${isdark?'dark':'light'}`}>
      {results.map((item)=>{
        return <Course key={item.id} title={item.snippet.title} desc={item.snippet.description} img={item.snippet.thumbnails.high.url}/>
      })}
    </div>
  )
}

export default Courses