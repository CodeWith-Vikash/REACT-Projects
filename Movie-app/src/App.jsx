import React, { useEffect } from 'react'
import { fetchdatafromapi } from './utils/api'
import {getApiConfiguration} from './store/homeSlice'
import { useDispatch,useSelector } from 'react-redux'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Errorpage from './pages/404/Errorpage'
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import Searchpage from './pages/searchresult/Searchpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  const dispatch=useDispatch()
  const store=useSelector((state)=> state.home)
  // console.log(store);
  const fetchconfig=()=>{
     fetchdatafromapi('/configuration').then((res)=>{
      console.log(res);
        const url={
          backdrop:res.images.secure_base_url+"original",
          poster:res.images.secure_base_url+"original",
          profile:res.images.secure_base_url+"original"
        }
        dispatch(getApiConfiguration(url))
     })
  }
  useEffect(()=>{
     fetchconfig()
  },[])
  return (
    <div style={{color:"white"}}>
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:mediaType/:id' element={<Details/>}/>
          <Route path='/explore/:mediaType' element={<Explore/>}/>
          <Route path='/search/:query' element={<Searchpage/>}/>
          <Route path='*' element={<Errorpage/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App