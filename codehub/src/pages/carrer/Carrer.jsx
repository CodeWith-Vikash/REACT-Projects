import React, { useState, useEffect } from 'react';
import './Style.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {techs} from '../Roadmaps/Roadmapdata'

function Carrer() {
  const { isdark } = useSelector((state) => state.mainReducer.home);
  const {tech}= useParams()
  let PDF=techs.filter((item)=>item.name==tech).map((item)=> item.pdf)
  
  return (
    <div className={`carrer ${isdark ? 'dark' : 'light'}`}>
         {
          PDF[0].endsWith('.jpg')?<img src={PDF[0]} alt="" />:
          <iframe src={PDF[0]} frameborder="0"></iframe>
         }
    </div>
  );
}

export default Carrer;
