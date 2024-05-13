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
            <img src="https://avatars.githubusercontent.com/u/134268120?s=400&u=544eda4825202e68f79e73bbe0d8a9742ce68963&v=4" alt="" />
            <b>CodeWithVikash</b>
        </div>
        <span>Copyright © 2024 CodeWithVikash.vercel.app</span>
        <div className="links">
           <a target='_blank' href="https://www.linkedin.com/in/code-with-vikash/"><FaLinkedin size="1.7rem"/></a>
            <a target='_blank' href="https://twitter.com/codeWithVikash"><FaSquareXTwitter size="1.7rem"/></a>
          <a target='_blank' href="https://github.com/CodeWith-Vikash"><FaGithubSquare size="1.7rem"/></a>
        </div>
    </footer>
  )
}

export default Footer