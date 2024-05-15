import React, { useEffect, useState } from 'react'
import './Style.scss'
import Course from '../../components/Course/Course'
import { useSelector } from 'react-redux'
import { fetchdatafromapi } from '../../utils/api'

const Courses = () => {
  const [inputval, setinputval] = useState("")
  const {isdark}=useSelector((state)=>state.mainReducer.home)
  const [results, setresults] = useState([])
  const chanelids = ['UCeVMnSShP_Iviwkknt83cww','UCNQ6FEtztATuaVhZKCY28Yw','UCwfaAHy4zQUb2APNOGXUCCA','UCkGS_3D0HEzfflFnG0bD24A','UCM-yUTYGmrNvKOCcAl21g3w','UCc7gpqMnnOSbU_F2-5MVVZw','UCldyi11QYNXYXiLjVbyw5dA'];
  
  const fetchdata=async()=>{
    let list=await Promise.all(chanelids.map((id)=> fetchdatafromapi(id)))
    let data=list.map((item=> item.filter((elem)=> elem.snippet.title.toLowerCase().startsWith('chai aur javascript') || elem.snippet.title.toLowerCase().startsWith('python for beginners (full course)')||elem.snippet.title.toLowerCase().startsWith('chai aur react | with projects')||elem.snippet.title.toLowerCase().includes('java tutorial')||elem.snippet.title.toLowerCase().includes('chai aur next')||elem.snippet.title.toLowerCase().includes('php tutorials')||elem.snippet.title.toLowerCase().includes('logic building with c')||elem.snippet.title.toLowerCase().startsWith('programming in c')||elem.snippet.title.toLowerCase().startsWith('c#.net')||elem.snippet.title.toLowerCase().startsWith('front-end development')||elem.snippet.title.toLowerCase().includes('complete c++ placement')||elem.snippet.title.toLowerCase().includes('flutter series'))))
    let subdata=[].concat(...data)
    console.log(subdata);
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