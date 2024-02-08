import React, { useState } from 'react'
import Categories from './Categories'
import Menu from './Menu'
import items from './Data'

const App = () => {
  const allCategories= ['all',...new Set(items.map((item)=> item.category))]
  // console.log(allCategories);
  const [menuItems, setmenuItems] = useState(items)
  const [categories, setcategories] = useState(allCategories)

  const filterItems=(category)=>{
    if(category==='all'){
      setmenuItems(items)
      return
    }
    const newItems=items.filter((item)=> item.category==category)
    setmenuItems(newItems)
  }
  return (
    <div className=' bg-gray-200 min-h-screen w-full pt-14'>
      <h1 className='text-center text-4xl font-semibold'>Our Menu</h1>
      <div className='underline w-20 h-1 bg-orange-700 rounded-full my-1 mx-auto'></div>
       {/* categories section */}
      <div className="categories">
        <Categories filterItems={filterItems} categories={categories}/>
      </div>
        <div className="grid">
        <Menu items={menuItems}/>
        </div>
    </div>
  )
}

export default App