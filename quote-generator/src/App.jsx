import React, { useEffect, useState } from 'react'

const App = () => {
    const [isloading, setisloading] = useState(true)
    const [quote, setquote] = useState()
    const [author, setauthor] = useState()
    const url="https://api.quotable.io/random"
    const getdata=async ()=>{
        setisloading(true)
        let respose= await fetch(url)
        let data=await respose.json()
        console.log(data);
        setquote(data.content)
        setauthor(data.author)
        setisloading(false)
    }

    useEffect(()=>{
        getdata()
    },[])
  return (
    <div className='container'>
        <div className="box">

             {isloading?<img src="src\loader.svg"/>:<div className='content'>
                  <b>" {quote} "</b>
                  <span>~{author}~</span>
                </div>}
             <button onClick={getdata}>New Quote</button>
        </div>
    </div>
  )
}

export default App