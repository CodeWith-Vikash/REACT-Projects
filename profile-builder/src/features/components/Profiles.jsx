import React from 'react'
import Nav from './Nav'
import Card from './Card'
import { useSelector} from 'react-redux'

const Profiles = () => {
    const cards=useSelector((state)=> state.cards)
    console.log(cards);
  return (
    <div className='min-h-screen bg-green-500'>
        <Nav/>
        <div className='h=[90vh] flex flex-wrap justify-center gap-5 py-10 px-5'>
            {cards.map((elem)=>{
                return <Card key={elem.id} name={elem.name} skills={elem.skills} job={elem.jobrole} image={elem.imageurl} exp={elem.experience} id={elem.id}/>
            })}
        </div>
    </div>
  )
}

export default Profiles