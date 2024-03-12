import React, { useState } from 'react'
import Product from './components/Product'
import items from './components/Data'
import { FaShoppingCart } from "react-icons/fa";
import Cart from './components/Cart';

const App = () => {
  const [showcart, setshowcart] = useState(false)
  const [cartdata, setcartdata] = useState([])
  const [totalprice, settotalprice] = useState(0)
  const cartToggle=()=>{
      setshowcart(!showcart)
      calculatetotal()
  }
  const addtocart=(material)=>{
     cartdata.push(material)
  }
  const removeitem=(index)=>{
    let updatedata=cartdata.filter((m,i)=> i !=index)
    setcartdata(updatedata)
    settotalprice(totalprice-cartdata[index].price)
    // console.log(index);
  }

  const calculatetotal=()=>{
       let total= cartdata.reduce((a,b)=>{
          return a+b.price
       },0)
       settotalprice(total)
       console.log(total);
      }
  return (
    <div className='container'>
    <nav>
       <h1>Sopify.com</h1>
       <div>
          <FaShoppingCart className='icon' onClick={cartToggle}/>
       </div>
    </nav>
    {showcart?<Cart data={cartdata} removeitem={removeitem} total={totalprice}/>:<div className="items">
      {
        items.map((item,index)=>{
          return <Product img={item.image} name={item.name} price={item.price} key={index} addtocart={addtocart}/>
        })
      }
    </div>}
    </div>
  )
}

export default App