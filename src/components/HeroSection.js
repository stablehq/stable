// Imports
import React from "react";

// CSS
import * as HeroStyles from "./css/HeroSection.module.css";

// ======== Component ========
const HeroSection = (props) => {
  return (
    <div className={`flex flex-jc-fs w100 ${HeroStyles.heroContainer}`}>
      {/* Gradient */}
      <div className={HeroStyles.grad}>
        <div className={HeroStyles.gradInner}></div>
        <div className={HeroStyles.gradMask}></div>
        {/* <div className={HeroStyles.glass}></div> */}
      </div>

    </div>
  );
};

export default HeroSection;