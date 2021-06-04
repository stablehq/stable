// Imports
import React from "react";

// CSS
import * as SignupStyles from "./css/SignupSection.module.css";

// ======== Component ========
const SignupSection = (props) => {
  return (
    <section className={`flex w100 wrapper ${SignupStyles.signup}`}>
      <h2 className={SignupStyles.title}>Sign Up</h2>
      <p>Be first to try out Stable.</p>
    </section>
  );
};

export default SignupSection;