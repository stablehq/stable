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
import Chip from "../assets/images/card_chip.svg";
import Logo from "../assets/images/logo_color.svg";
import Visa from "../assets/images/logo_visa.svg";
import CardTouch from "../assets/images/icon_card_touch.svg";

// ======== Component ========
const SummarySection = (props) => {
  return (
    <section className={`flex w100 wrapper ${SummaryStyles.summary}`}>
      <div className={SummaryStyles.summaryScroll} id="features"></div>
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
          {/* <img 
            src="https://via.placeholder.com/242x153"
            alt="Hero with phone"
            className={SummaryStyles.cardImage}
          /> */}

          <div className={SummaryStyles.cardImage}>
            <div className={SummaryStyles.cardMagStrip}></div>
            <Chip className={SummaryStyles.cardChip}/>
            <Logo className={SummaryStyles.cardLogo}/>
            <Visa className={SummaryStyles.cardVisa}/>
            <CardTouch className={SummaryStyles.cardTouch}/>
            <p className={SummaryStyles.cardNo}>1111 2222 3333 4444</p>
            <p className={SummaryStyles.cardName}>Joe L. Smith</p>
            <p className={SummaryStyles.cardExp}>11/23</p>
            <p className={SummaryStyles.cardGoodThru}>GOOD<br/>THRU</p>
          </div>


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