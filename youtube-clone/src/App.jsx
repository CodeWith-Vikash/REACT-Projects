import React, { useEffect,useState } from 'react';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Singlevid from './components/Singlevid'


const App = () => {
  
  
  return (
     <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/video" element={<Singlevid/>}/>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
