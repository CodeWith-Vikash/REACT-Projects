import React from 'react'

const Pokemons = ({allpokemons,isloading,iserror,setsingle}) => {
   if(isloading){
      return <h1 className='text-center text-xl text-yellow-300'>Loading...</h1>
   }
   if(iserror){
    return <h1 className='text-center text-xl text-red-500'>an error occured</h1> 
   }
  return (
    <div className='flex flex-wrap gap-4 justify-center p-4'>
        {allpokemons && allpokemons.map((item)=>{
            return <div className="flex items-center gap-2 justify-center bg-blue-400 text-black w-[220px] p-2 rounded-xl font-semibold shadow-xl cursor-pointer" key={item.id} onClick={()=> setsingle(item)}>
            <p>{item.id}</p>
            <img src={item.sprites.front_default} className='h-20 w-20'/>
            <p>{item.name}</p>
        </div>
        })}
    </div>
  )
}

export default Pokemons