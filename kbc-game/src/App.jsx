import React, { useState } from 'react'
import Quiz from './components/Quiz'

const App = () => {
  const [isgame, setisgame] = useState(false)
  const startgame=(e)=>{
      let audio=new Audio
      audio.src='kbc-game/src/Assests/play.mp3'
      audio.play()
      setisgame(true)
      setTimeout(() => {
        audio.pause()
      },4000);
  }
  const resetgame=()=>{
     setisgame(!isgame)
  }
  return (
    <div className='container'>
      {isgame?<Quiz resetgame={resetgame}/>:<form className='login' onSubmit={startgame}>
        <h1>Who wants to be a Millionaire</h1>
         <input type="text" placeholder='Username' required/>
         <button>start</button>
      </form>}
    </div>
  )
}

export default App