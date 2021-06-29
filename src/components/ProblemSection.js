// Imports
import React from "react";

// CSS
import * as ProblemStyles from "./css/ProblemSection.module.css";

// Components
import Colon from "../assets/images/icon_colon.svg";

// ======== Component ========
const ProblemSection = (props) => {
  return (
    <section className={`flex w100 wrapper ${ProblemStyles.summary}`}>
      <div className={ProblemStyles.scroll} id="problem"></div>
      <h2 className={ProblemStyles.title}>
        <span style={{ fontSize: "2rem" }}>The Problem<Colon className={ProblemStyles.colon} /></span><br />
        Impusle Spending
      </h2>
      <div className={`flex flex-row w100 ${ProblemStyles.contentContainer}`}>

        <iframe width="889" height="500" src="https://www.youtube.com/embed/zK_Qc4iD9Ds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        {/* Image */}
        {/* <div className={`flex ${ProblemStyles.imageContainer}`}>
          <img 
            src="https://via.placeholder.com/242x153"
            alt="Hero with phone"
            className={ProblemStyles.cardImage}
          />
        </div> */}

        {/* Features */}
        {/* <div className={`flex ${ProblemStyles.textContainer}`}>
          <ul className={ProblemStyles.featuresList}>
            <li>
              <div className={`flex ${ProblemStyles.bubble}`}>
                <Wallet className={ProblemStyles.iconWallet} />
              </div> 
              A dynamic digital wallet and debit card gives you full control over your spending habits
            </li>
            <li>
              <div className={`flex ${ProblemStyles.bubble}`}>
                <Dollar className={ProblemStyles.iconDollar} />
              </div> 
              Effortlessly push money to your Stable debit card when you need it
            </li>
            <li>
              <div className={`flex ${ProblemStyles.bubble}`}>
                <User className={ProblemStyles.iconUser} />
              </div> 
              Define savings goals, create a fund for emergencies, and track your progress
            </li>
            <li>
              <div className={`flex ${ProblemStyles.bubble}`}>
                <Bank className={ProblemStyles.iconBank} />
              </div> 
              Keep your money closer, without dealing with predatory banks
            </li>
          </ul>
        </div> */}

      </div>
    </section>
  );
};

export default ProblemSection;