import React, { useEffect, useState } from 'react'
import Card from './Card'

const App = () => {
  const [username, setusername] = useState('')
  const [found, setfound] = useState(true)
  const [isloading, setisloading] = useState(false)
  const [showcard, setshowcard] = useState(false)
  const [bio, setbio] = useState('')
  const [img, setimg] = useState()
  const [Followers, setFollowers] = useState(0)
  const [name, setname] = useState('')
  const [link, setlink] = useState()
  const url='https://api.github.com/users/' + username

// function to fetch data
  const getdata=async ()=>{
    setisloading(true)
    let response=await fetch(url)
    let data=await response.json()
    console.log(data);
    // checking if account is avilable or not
    if(data.login){
      setimg(data.avatar_url)
      setbio(data.bio)
      setFollowers(data.followers)
      setname(data.name)
      setshowcard(true)
      setlink(data.html_url)
    }else{
      setfound(false)
    }
    setisloading(false)
  }

  return (
    <div className='container'>
      <h1>Search Github</h1>
       <div className="input">
         <input type="text" placeholder='Enter username' 
          onChange={e => setusername(e.target.value)}
          value={username} 
         />
         <button onClick={getdata}>Search</button>
       </div>
       {!found?<p className='warn'>Account not found !reload the page</p>: isloading?<p className='load'>Loading...</p>:showcard && <Card name={name} followers={Followers} img={img} bio={bio} link={link}/>}
    </div>
  )
}

export default App