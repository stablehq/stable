// Imports
import React from "react";

// CSS
import * as HeaderStyles from "./css/Header.module.css";

// Components
import Logo from "../assets/images/logo_color.svg";

// ======== Component ========
const Header = (props) => {
  return (
    <header className={`flex w100 ${HeaderStyles.header}`}>
      <div className={`flex flex-row flex-jc-sb wrapper w100 ${HeaderStyles.headerWrapper}`}>
        {/* Logo */}
        <a 
          href="/"
          className={`flex flex-row ${HeaderStyles.logoGroup}`}>
          <Logo className={HeaderStyles.logo}/>
          <h2 className={HeaderStyles.logoText}>Stable</h2>
        </a>

        {/* Nav */}
        <nav>
          <ul className={`flex flex-row ${HeaderStyles.navList}`}>
            {/* Home */}
            <li><a href="/" className="flex flex-row">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" className={HeaderStyles.icon}>
                <path className={HeaderStyles.iconFill} fill="#fff" stroke="#43aaef" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.8,19.3h10.5c1.1,0,2-0.9,2-2V9.8l-7.3-5l-7.2,5v7.5C4.8,18.4,5.6,19.3,6.8,19.3z"/>
                <path className={HeaderStyles.pathFill} fill="#fff" stroke="#43aaef" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.7,13.4c0-1.1,0.9-2,2-2h0.5c1.1,0,2,0.9,2,2v3.5h-1.9H9.7V13.4z"/>
              </svg>
              <p>Home</p>
            </a></li>
            {/* Features */}
            <li><a href="/" className="flex flex-row">
              <svg width="30" height="30" fill="#fff" viewBox="0 0 24 24" className={HeaderStyles.icon}>
                <path className={HeaderStyles.iconFill} stroke="#43aaef" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"/>
              </svg>
              <p>Features</p>
            </a></li>
            {/* About */}
            <li><a href="/" className="flex flex-row">
              <svg width="30" height="30" fill="#fff" viewBox="0 0 24 24" className={HeaderStyles.icon}>
                <path className={HeaderStyles.iconFill} stroke="#43aaef" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.75 19.25L12 4.75L19.25 19.25L12 15.75L4.75 19.25Z"/>
                <path className={HeaderStyles.iconFill} stroke="#43aaef" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15.5V12.75"/>              
              </svg>
              <p>Sign Up</p>
              {/* <svg width="30" height="30" fill="#fff" viewBox="0 0 24 24" className={HeaderStyles.icon}>
                <path className={HeaderStyles.iconFill} stroke="#43aaef" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"/>
              </svg>
              <p>About</p> */}
            </a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;