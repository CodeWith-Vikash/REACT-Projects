import React, { useEffect, useState } from 'react'
import Recipe from './components/Recipe'

const App = () => {
  const [iserror, setiserror] = useState(false)
  const [isloading, setisloading] = useState(false)
  const [inputval, setinputval] = useState('')
  const [recipes, setrecipes] = useState([])
  let appKey='57c3b159b90f44feb230f9065e88a510'
  let appId='59ecfdfb'
  let searchString='egg'
  const url=`https://api.edamam.com/search?q=${inputval}&app_id=${appId}&app_key=${appKey}`
  const getdata=async ()=>{
    setiserror(false)
    setisloading(true)
    let response=await fetch(url)
    let data= await response.json()
    console.log(data);
   setrecipes(data.hits)
   setisloading(false)
   if(data.hits.length==0){
       setiserror(true)
   }
  }
  return (
    <div className='container'>
      <nav>
        <div className="title">
          <span>🍔</span>
          <h1>Recipe Finder</h1>
        </div>
        <input type="text" placeholder='Search Recipe' value={inputval}
          onChange={(e)=> setinputval(e.target.value)}
          onKeyDown={(e)=>{
             if(e.key=='Enter'){
              getdata()
             }
          }}
        />
      </nav>
      {isloading?<h2>Loading...</h2>:<main>
        {iserror?<h2>No data found about {inputval}</h2>:recipes.map((item,index)=>{
             return <Recipe key={index} name={item.recipe.label} img={item.recipe.image} link={item.recipe.shareAs} ingredients={item.recipe.ingredientLines}/>
        })}
      </main>}
    </div>
  )
}

export default App