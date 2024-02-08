import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref=useRef(null)
  const data=[
    {desc:"this is the my first react project and it's good to learn",filesize:"0.9mb",close:true,tagDetails:{
      isopen:false,tagtitle:"Download now",color:"green"
    }},
    {desc:"this is the my first react project and it's good to learn",filesize:"0.9mb",close:true,tagDetails:{
      isopen:true,tagtitle:"Upload now",color:"blue"
    }},
    {desc:"this is the my first react project and it's good to learn",filesize:"0.9mb",close:true,tagDetails:{
      isopen:true,tagtitle:"Download now",color:"green"
    }}
  ]
  return (
    <>
     <div ref={ref} className='fixed z-[3] h-screen top-0 left-0 w-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
          <Card data={item} refrence={ref}/>
        ))}
     </div>
    </>
  )
}

export default Foreground