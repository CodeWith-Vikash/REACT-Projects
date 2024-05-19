import React, { useEffect, useState } from 'react'
import './Style.scss'
import Course from '../../../components/Course/Course'
import { fetchdatafromapi } from '../../../utils/api'

const Suggested = () => {
  const [results, setresults] = useState([])
  const chanelids = ['UCeVMnSShP_Iviwkknt83cww','UCNQ6FEtztATuaVhZKCY28Yw','UCwfaAHy4zQUb2APNOGXUCCA','UCkGS_3D0HEzfflFnG0bD24A','UCM-yUTYGmrNvKOCcAl21g3w','UCc7gpqMnnOSbU_F2-5MVVZw','UCldyi11QYNXYXiLjVbyw5dA'];
  
  const fetchdata=async()=>{
    let list=await Promise.all(chanelids.map((id)=> fetchdatafromapi(id)))
    let data=list.map((item=> item.filter((elem)=> elem.snippet.title.toLowerCase().startsWith('chai aur javascript') || elem.snippet.title.toLowerCase().startsWith('python for beginners (full course)')||elem.snippet.title.toLowerCase().startsWith('front-end development'))))
    let subdata=[].concat(...data)
    // console.log(subdata);
    setresults(subdata)
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className='suggested'>
        <h3>Recommended Courses</h3>
        <div className="courses">
          <div className="wrap">
          {
            results.map((item)=>{
              return <Course key={item.id} title={item.snippet.title} desc={item.snippet.description} img={item.snippet.thumbnails.high.url} id={item.id}/>
            })
          }
          </div>
        </div>
    </div>
  )
}

export default Suggested