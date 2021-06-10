// Imports
import React from "react";

// CSS
import * as FooterStyles from "./css/Footer.module.css";

// ======== Component ========
const Footer = (props) => {
  return (
    <footer className={`flex w100 ${FooterStyles.footer}`}>
      {/* Gradient */}
      <div className={FooterStyles.grad}>
        <div className={FooterStyles.gradInner}></div>
        <div className={FooterStyles.gradInner2}></div>
        <div className={FooterStyles.gradMask}></div>
      </div>
    </footer>
  );
};

export default Footer;