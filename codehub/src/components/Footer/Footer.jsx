import React from 'react'
import './Style.scss'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Footer = () => {
  const {isdark}=useSelector((state)=>state.mainReducer.home)
  return (
    <footer className={isdark?'dark':'light'}>
        <div className="title">
            <img src="/brandlogo.png" alt="" />
            <b>Techbro</b>
        </div>
        <span>Copyright © 2024  Techbro.vercel.app</span>
        <div className="links">
           <a target='_blank' href="https://www.linkedin.com/in/code-with-vikash/"><FaLinkedin size="1.7rem"/></a>
            <a target='_blank' href="https://twitter.com/codeWithVikash"><FaSquareXTwitter size="1.7rem"/></a>
          <a target='_blank' href="https://github.com/CodeWith-Vikash"><FaGithubSquare size="1.7rem"/></a>
        </div>
    </footer>
  )
}

export default Footer