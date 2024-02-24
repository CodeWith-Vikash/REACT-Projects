import React from 'react'
import Header from './components/Header'
import Card from './components/Card'

const App = () => {
  return (
    <div className='body'>
      <Header/>
      <div className="main">
        <Card image="src\images\burger.png" text="Burger" price="10.2$"/>
        <Card image="src\images\cake.png" text="Cake" price="15$"/>
        <Card image="src\images\Chicken.png" text="Chicken" price="20.5$"/>
        <Card image="src\images\pancake.png" text="Pancake" price="5.9$"/>
        <Card image="src\images\egg.png" text="Egg" price="12.2$"/>
        <Card image="src\images\ramen.png" text="Ramen" price="16.7$"/>
      </div>
    </div>
  )
}

export default App