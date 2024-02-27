
import { useState } from 'react'
import Home from './components/Home'
import Game from './components/Game'
import song from './components/bgm.mp3'
const App = () => {
   const [play, setplay] = useState(!false)
   const handlePlaybtn =(user)=>{
      new Audio(song).play()
      setplay(user)
   }
  return (
        <div>
           {play? <Game/> : <Home play={handlePlaybtn}/>}
        </div>
  )
}

export default App
