// Imports
import React from "react";

// CSS
import * as HeroStyles from "./css/HeroSection.module.css";

// ======== Component ========
const HeroSection = (props) => {
  return (
    <section className={`flex flex-jc-fs w100 ${HeroStyles.heroContainer}`} id="hero">
      {/* Gradient */}
      <div className={HeroStyles.grad}>
        <div className={HeroStyles.gradInner}></div>
        <div className={HeroStyles.gradInner2}></div>
        <div className={HeroStyles.gradMask}></div>
        {/* <div className={HeroStyles.glass}></div> */}
      </div>

      <div className={`flex flex-row flex-jc-sb w100 wrapper ${HeroStyles.heroInfoContainer}`}>
        <h1 className={HeroStyles.heroText}>
            Break the cycle of impulse spending.
          <br/>Save up for the important things. 
          <br/>Build better financial habits.
        </h1>
        <img 
          src="https://via.placeholder.com/260x400"
          alt="Hero with phone"
          className={HeroStyles.heroImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;