import React, { useState } from 'react'

const App = () => {
  let array=['avisk','botsl','kdog','iglk','clkgg','djls','esfsdf','fjgso','gsfs','herpo','igslg','jfsiodf','iejk','jghgsl','ulsf;','fsldfk']
  const [names, setnames] = useState(array)
  const [input, setinput] = useState('')
  return (
    <div className='container'>
      <input type="text" onChange={e => setinput(e.target.value)} placeholder='search data'/>
      {names.filter((val)=>val.startsWith(input)).map((item)=> <div>{item}</div>)}
    </div>
  )
}

export default App