// Imports
import React from "react";

// CSS
import * as HeaderStyles from "./css/Header.module.css";

// Components
import Logo from "../assets/images/logo_white.svg";

// ======== Component ========
const Header = (props) => {
  return (
    <header className={`flex w100 ${HeaderStyles.header}`}>
      <div className={`flex flex-row flex-jc-sb flex-ai-fe wrapper w100 ${HeaderStyles.headerWrapper}`}>

        {/* Logo */}
        <div className={`flex flex-row ${HeaderStyles.logoGroup}`}>
          <Logo className={HeaderStyles.logoWhite}/>
          <h2 className={HeaderStyles.logoText}>Stable</h2>
        </div>

        {/* Nav */}
        <nav>
          <ul className={`flex flex-row ${HeaderStyles.navList}`}>
            <li><a href="/">One</a></li>
            <li><a href="/">Two</a></li>
            <li><a href="/">Three</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;