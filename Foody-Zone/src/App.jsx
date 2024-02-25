import React, { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import menu from './components/Data'

const App = () => {
  const [data, setdata] = useState(menu)
  const filterBtn=(category)=>{
    // setdata(category)
    let newdata=menu.filter((item)=>item.category==category)
    setdata(newdata)
    if(category=="all"){
      setdata(menu)
    }
  }
  return (
    <div className='body'>
      <Header filterFun={filterBtn}/>
      <div className="main">
         {
           data.map((item)=>{
              return <Card name={item.title} price={item.price} image={item.img} text={item.desc}/>
           })
         }
      </div>
    </div>
  )
}

export default App