// Imports
import React from "react";

// CSS
import * as HeaderStyles from "./css/Header.module.css";

// ======== Component ========
const Header = (props) => {
  return (
    <header className={`flex w100 ${HeaderStyles.header}`}>
      <ul className="flex flex-row flex-jc-se w100">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
    </header>
  );
};

export default Header;