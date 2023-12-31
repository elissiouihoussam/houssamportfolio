import React, { useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
import {ImSun} from 'react-icons/im'
import {BsFillMoonFill} from 'react-icons/bs'
import {  Container , Nav } from "react-bootstrap";





function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavState(false));





  

  return (

    <nav>
      <div className="container py-3 mx-3">
        <div className="brand">
          <a href='#'>
          
          <span>elissiouihoussam</span>
          </ a>
          
        </div>
        <div className="links-container" onClick={(e) => e.stopPropagation()}>
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavState(true);
                }}
              />
            )}
            <div onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="sun" />
              ) : (
                <BsFillMoonFill className="moon" />
              )}
            </div>
          </div>
          <div className={`links ${navState ? "responsive-toggle" : ""}`}>
            <ul>
              <li>
                <a href="#"> Home</a>
              </li>
              <li>
                <a href="#skills"> About</a>
              </li>
              <li>
                <a href="#projects"> Projects</a>
              </li>
              <li>
                <a href="#contact"> Contact</a>
              </li>
              <li>
                
              </li>
              <li onClick={changeTheme} className="color-mode">
                {currentTheme === "dark" ? (
                  <ImSun className="sun" />
                ) : (
                  <BsFillMoonFill className="moon" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
