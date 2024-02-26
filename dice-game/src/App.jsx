
import { useState } from 'react'
import Home from './components/Home'
import Game from './components/Game'
const App = () => {
   const [play, setplay] = useState(false)
   const handlePlaybtn =(user)=>{
      setplay(user)
   }
  return (
        <div>
           {play? <Game/> : <Home play={handlePlaybtn}/>}
        </div>
  )
}

export default App
