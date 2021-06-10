// Imports
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// CSS
import * as SummaryStyles from "./css/SummarySection.module.css";

// Components
import Bank from "../assets/images/icon_bank.svg";
import Dollar from "../assets/images/icon_dollar.svg";
import Wallet from "../assets/images/icon_wallet.svg";
import User from "../assets/images/icon_user.svg";

// ======== Component ========
const SummarySection = (props) => {
  return (
    <section className={`flex w100 wrapper ${SummaryStyles.summary}`}>
      <h2 className={SummaryStyles.title}>Features</h2>
      <div className={`flex flex-row flex-jc-sb w100 ${SummaryStyles.contentContainer}`}>
        <div className={`flex ${SummaryStyles.textContainer}`}>

          {/* Features */}
          <ul className={SummaryStyles.featuresList}>
            <li>
              <div className={`flex ${SummaryStyles.bubble}`}>
                <Wallet className={SummaryStyles.iconWallet} />
              </div> 
              A dynamic digital wallet and debit card gives you full control over your spending habits
            </li>
            <li>
              <div className={`flex ${SummaryStyles.bubble}`}>
                <Dollar className={SummaryStyles.iconDollar} />
              </div> 
              Effortlessly push money to your Stable debit card when you need it
            </li>
            <li>
              <div className={`flex ${SummaryStyles.bubble}`}>
                <User className={SummaryStyles.iconUser} />
              </div> 
              Define savings goals, create a fund for emergencies, and track your progress
            </li>
            <li>
              <div className={`flex ${SummaryStyles.bubble}`}>
                <Bank className={SummaryStyles.iconBank} />
              </div> 
              Keep your money closer, without dealing with predatory banks
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className={`flex ${SummaryStyles.imageContainer}`}>
          <img 
            src="https://via.placeholder.com/242x153"
            alt="Hero with phone"
            className={SummaryStyles.cardImage}
          />
          <StaticImage 
            src="../assets/images/app.png"
            alt="mobil app"
            className={SummaryStyles.appImage}
          />
        </div>
      </div>
    </section>
  );
};

export default SummarySection;