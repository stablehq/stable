// Imports
import React from "react";

// CSS
import * as FooterStyles from "./css/Footer.module.css";

// ======== Component ========
const Footer = (props) => {
  return (
    <footer className={`flex w100 ${FooterStyles.footer}`}>
      <p>Footer</p>
    </footer>
  );
};

export default Footer;