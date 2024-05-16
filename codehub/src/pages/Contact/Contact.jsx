import React from 'react'
import './Style.scss'
import { useSelector } from 'react-redux'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    const {isdark}=useSelector((state)=>state.mainReducer.home)
  return (
    <div className={`contact ${isdark?'dark':'light'}`}>
        <div className="social">
            <p>Fell free to contact me</p>
            <img src="https://avatars.githubusercontent.com/u/134268120?v=4" alt="" />
            <div className="socialmedias">
            <a target='_blank' href="https://www.linkedin.com/in/code-with-vikash/"><FaLinkedin size="2rem"/></a>
            <a target='_blank' href="https://twitter.com/codeWithVikash"><FaSquareXTwitter size="2rem"/></a>
          <a target='_blank' href="https://github.com/CodeWith-Vikash"><FaGithubSquare size="2rem"/></a>
            </div>
            <div className="phone">
                <FaPhoneAlt size="1.5rem"/>
                <b>8873478342</b>
            </div>
        </div>
        <form action="https://formspree.io/f/mleqvzpa" method='post'>
            <p>Send a Feedback or message</p>
            <input type="text" placeholder='Name' name='name'/>
            <input type="email" placeholder='Email' name='email'/>
            <textarea placeholder='Message or Review' rows={7} cols={29} name='message'></textarea>
            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default Contact