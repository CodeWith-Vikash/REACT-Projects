import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { CartContext } from "../../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from 'react-toastify';
import { MdClose } from "react-icons/md";

const Header = () => {
  const location = useLocation();
  const [isFocus, setIsFocus] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { cart } = useContext(CartContext);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const prevAuthState = useRef(isAuthenticated);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const sideRef = useRef(null);

  const searchProduct = (e) => {
    navigate(`/search/${query}`);
    setQuery("");
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  useEffect(() => {
    if (prevAuthState.current !== isAuthenticated) {
      if (isAuthenticated) {
        toast.success('User logged in successfully');
      } else {
        toast.warning('User logged out');
      }
      prevAuthState.current = isAuthenticated;
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isLoggedOut) {
      toast.warning('User logged out');
      setIsLoggedOut(false); // Reset the state after showing the toast
    }
  }, [isLoggedOut]);

  // Handle clicks outside the nav to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideRef.current && !sideRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="flex justify-between h-14 items-center px-3 md:sticky top-0 bg-gray-900 text-white z-40">
        <NavLink to="/" className={`${isFocus && "hidden"} md:block`}>
          <img src="/logo.png" alt="Logo" className="h-10 shadow-xl" />
        </NavLink>
        <div className="hidden items-center gap-6 font-semibold md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          {isAuthenticated ? (
            <button
              className="bg-red-500 px-2 py-1 rounded"
              onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } });
                setIsLoggedOut(true);
              }}
            >
              Log Out
            </button>
          ) : (
            <button
              className="bg-green-500 px-2 py-1 rounded"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}
        </div>
        <section className="flex gap-6">
          <div className="relative text-gray-900">
            <input
              type="text"
              placeholder="Search.."
              className={`outline-none border-none px-4 rounded-full w-[30vw] md:w-[250px] h-8 ${
                isFocus && "w-[95vw] md:w-[250px]"
              }`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchProduct()}
              onFocus={() => setIsFocus(true)}
              onBlur={() => {
                setTimeout(() => {
                  setIsFocus(false);
                }, 100);
              }}
            />
            <FaSearch
              size="1rem"
              className="absolute right-2 top-[50%] translate-y-[-50%]"
              onClick={searchProduct}
            />
          </div>

          <NavLink to="/cart" className={`${isFocus && "hidden"} md:block`}>
            <div className="relative">
              <HiShoppingCart size="1.5rem" />
              {cart.length > 0 && (
                <div className="absolute bg-green-600 text-sm font-semibold top-[-5px] right-[-3px] rounded-full h-3 w-3 flex items-center justify-center p-2">
                  {cart.length}
                </div>
              )}
            </div>
          </NavLink>
          {!isNavOpen?<GiHamburgerMenu
            className="md:hidden cursor-pointer"
            size="1.5rem"
            onClick={toggleNav}
            style={isFocus ? { display: "none" } : null}
          />:<MdClose
          className="md:hidden cursor-pointer"
          size="1.5rem"
          onClick={toggleNav}
          style={isFocus ? { display: "none" } : null}
          />}
        </section>
      </nav>
      {/* Side Navigation */}
      {isNavOpen && (
        <div className="subnav absolute h-[92vh] w-full bg-black bg-opacity-[0.5] top-14 right-0 flex justify-end">
          <div className="h-full w-52 bg-white flex flex-col gap-4 font-semibold items-center pt-10 text-xl" ref={sideRef}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            {isAuthenticated ? (
              <button
                className="bg-red-500 px-2 py-1 rounded"
                onClick={() => {
                  logout({ logoutParams: { returnTo: window.location.origin } });
                  setIsLoggedOut(true);
                }}
              >
                Log Out
              </button>
            ) : (
              <button
                className="bg-green-500 px-2 py-1 rounded"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
