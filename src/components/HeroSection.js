// Imports
import React from "react";

// CSS
import * as HeroStyles from "./css/HeroSection.module.css";

// ======== Component ========
const HeroSection = (props) => {
  return (
    <section className={`flex flex-jc-fs w100 ${HeroStyles.heroContainer}`}>
      {/* Gradient */}
      <div className={HeroStyles.grad}>
        <div className={HeroStyles.gradInner}></div>
        <div className={HeroStyles.gradInner2}></div>
        <div className={HeroStyles.gradMask}></div>
        {/* <div className={HeroStyles.glass}></div> */}
        <div className={`flex flex-row w100 wrapper ${HeroStyles.heroInfoContainer}`}>
          <h1 className={HeroStyles.heroText}>
            This is placeholder text for our hero. Short section of text.
          </h1>
          <img 
            src="https://via.placeholder.com/350x350"
            alt="Hero with phone"
            className={HeroStyles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;