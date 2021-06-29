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
  const [emailValid, setEmailValid] = useState(null);
  const [buttonSubmitted, setButtonSubmitted] = useState(false);
  const [buttonSubmittedMessage, setButtonSubmittedMessage] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [labelCSS, setLabelCSS] = useState(noEmailStyles);

  const handleEmailSignup = (e) => {
    e.preventDefault();
    const regex = new RegExp(/\S+@\S+\.\S+/);

    console.log(regex.test(email));

    if (!regex.test(email)) {
      setEmailValid(false);
      setEmailSubmitted(false);
      setButtonSubmittedMessage("Please enter a valid email address.");
    } else {
      setButtonSubmitted(true);
      setEmailValid(true);
      setButtonSubmittedMessage("Submitting...");
      handleEmailSubmit();
    }
  };

  const handleEmailSubmit = async () => {
    // API call
    setTimeout(() => {
      setButtonSubmittedMessage("Thanks for signing up for Stable!");
      setButtonSubmitted(false);
      setEmailValid(null);
      setEmailSubmitted(true);
    }, 2000);
  };

  const handleLabelCSS = (state) => {
    if (state === "focus") {
      setLabelCSS(hasEmailStyles);

    }
    if (state === "blur" && !email) {
      setLabelCSS(noEmailStyles); 
      setEmailValid(null);
    }
  };

  return (
    <section className={`flex w100 wrapper ${SignupStyles.signup}`}>
      <div className={SignupStyles.scroll} id="signUp"></div>
      <h2 className={SignupStyles.title}>Sign Up</h2>
      <p className={SignupStyles.subTitle}>
        Be among the first to curb impulse spending with Stable.
        <br/>Sign up to join our waiting list.
      </p>

      {/* Email input */}
      <form className={`flex ${SignupStyles.form}`}>
        <div className="flex flex-row">
          <input 
            type="text" 
            className={SignupStyles.emailInput}
            style={emailValid === true ? { borderColor: "#54d1c1" } : emailValid === false ? { borderColor: "red" } : null}
            value={email}
            onFocus={() => { handleLabelCSS("focus"); }}
            onBlur={() => {handleLabelCSS("blur"); }}
            onChange={(e) => { setEmail(e.target.value); }}/>
          <p 
            className={SignupStyles.formEmailLabel}
            // style={labelCSS}
            style={(emailValid === null) ? labelCSS : (emailValid === true || emailSubmitted) ? { ...labelCSS, color: "#54d1c1" } : { ...labelCSS, color: "red" }}>
            Email
          </p>
          <button 
            type="submit"
            disabled={buttonSubmitted}
            className={`flex flex-row ${SignupStyles.emailButton}`}
            onClick={handleEmailSignup}>
            <p>Sign Up</p>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.75 19.25L12 4.75L19.25 19.25L12 15.75L4.75 19.25Z"/>
              <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15.5V12.75"/>
            </svg>
          </button>
        </div>
        {/* {(emailValid !== null || emailSubmitted) && */}
        <p 
          className={SignupStyles.emailFailureMessage}
          style={(emailValid === true || emailSubmitted) ? { color: "#54d1c1" } : { color: "red" }}>
          {buttonSubmittedMessage}
        </p>
        {/* } */}
      </form>
    </section>
  );
};

export default SignupSection;