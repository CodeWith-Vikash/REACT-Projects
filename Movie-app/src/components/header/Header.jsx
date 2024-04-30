import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./Style.scss";

import ContentWrapper from "../contentWrapper/Wrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const opensearch=()=>{
      setShowSearch(true)
    setMobileMenu(false)
    }
    
    const openmobilemenu=()=>{
      setShowSearch(false)
      setMobileMenu(true)
    }

    return (
        <header className={`header ${mobileMenu ? 'mobileView':""} ${show}`}>
          <ContentWrapper>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <ul className="menuItems">
              <li className="menuItem">Movies</li>
              <li className="menuItem">TvShows</li>
              <li className="menuItem"><HiOutlineSearch/></li>
            </ul>
            <div className="mobileMenuItems">
              {mobileMenu?
                <VscChromeClose onClick={()=>setMobileMenu(false)}/>
              :<SlMenu onClick={openmobilemenu}/>}
            </div>
          </ContentWrapper>
        </header>
    );
};

export default Header;