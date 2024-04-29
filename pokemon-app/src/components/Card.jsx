import React from 'react'

const Card = ({data}) => {
  // console.log(data);
  return (
    <div className='flex flex-col items-center gap-2  justify-center md:gap-6 text-sm'>
        <p className='font-bold text-xl'>{data.name}</p>
        <img src={data.sprites.other.dream_world.front_default} className='h-[100px] w-[150px] md:h-[200px] md:w-[200px]'/>
        <div>
        <div className='flex items-center gap-4'>
        {
          data.abilities.map((poke)=>{
              return <button className='bg-red-800 py-1 font-semibold px-4 rounded-md'>{poke.ability.name}</button>
          })
        }
        </div>
        </div>
        <section className='flex flex-col items-center mt-1'>
            {
              data.stats.map((poke)=>{
                  return <p>{poke.stat.name} : {poke.base_stat}</p>
              })
            }
        </section>
    </div>
  )
}

export default Card