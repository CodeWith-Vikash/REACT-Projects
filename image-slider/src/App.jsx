import React, { useState } from 'react'
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";


const App = () => {
  const images=[
    <img src='src\Images\pexels-darshak-pandya-574313.jpg'/>,
    <img src='src\Images\pexels-navneet-shanu-672630.jpg'/>,
    <img src='src\Images\pexels-pixabay-45201.jpg'/>,
    <img src='src\Images\pexels-sahil-prajapati-974320.jpg'/>
]
  const [current, setcurrent] = useState(0)
  console.log(images);
  return (
    <div className='container'>
      <TbPlayerTrackPrevFilled  className='icon' onClick={()=>current>0? setcurrent(current-1):setcurrent(images.length-1)}/>
      {images[current]}
      <TbPlayerTrackNextFilled className='icon' onClick={()=>current<images.length-1?setcurrent(current+1):setcurrent(0)}/>
    </div>
  )
}

export default App