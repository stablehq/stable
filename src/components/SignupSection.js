// Imports
import React, { useState } from "react";

// CSS
import * as SignupStyles from "./css/SignupSection.module.css";

// Styles
const noEmailStyles = {
  top: "21px",
};

const hasEmailStyles = {
  top: "-8px",
  zIndex: "2",
};

// ======== Component ========
const SignupSection = (props) => {

  // State
  const [email, setEmail] = useState("");
  const [labelCSS, setLabelCSS] = useState(noEmailStyles);

  const handleEmailSignup = (e) => {
    e.preventDefault();
    console.log("do stuff");
  };

  const handleLabelCSS = (state) => {
    if (state === "focus") setLabelCSS(hasEmailStyles);
    if (state === "blur" && !email) setLabelCSS(noEmailStyles);
  };

  return (
    <section className={`flex w100 wrapper ${SignupStyles.signup}`}>
      <h2 className={SignupStyles.title}>Sign Up</h2>
      <p className={SignupStyles.subTitle}>
        Be among the first to curb impulse spending with Stable.
        <br/>Sign up to be put on our waiting list.
      </p>

      {/* Email input */}
      <form className={`flex flex-row ${SignupStyles.form}`}>
        <input 
          type="text" 
          className={SignupStyles.emailInput}
          value={email}
          onFocus={() => { handleLabelCSS("focus"); }}
          onBlur={() => {handleLabelCSS("blur"); }}
          onChange={(e) => { setEmail(e.target.value); }}/>
        <p 
          className={SignupStyles.formEmailLabel}
          style={labelCSS}>
          Email
        </p>
        <button 
          type="submit"
          className={`flex flex-row ${SignupStyles.emailButton}`}
          onClick={handleEmailSignup}>
          <p>Sign Up</p>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.75 19.25L12 4.75L19.25 19.25L12 15.75L4.75 19.25Z"/>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15.5V12.75"/>
          </svg>
        </button>
      </form>
    </section>
  );
};

export default SignupSection;