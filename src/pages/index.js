// Imports
import React from "react";

// CSS
// import * as IndexStyles from "./css/Index.module.css";

// Components
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SummarySection from "../components/SummarySection";
import SignupSection from "../components/SignupSection";

// ======== Component ========
const Index = (props) => {
  return (
    <Layout 
      title="Stable | Harness Your Spending"
      description="Stable description"
    >
      
      <HeroSection />
      <ProblemSection />
      <SummarySection />
      <SignupSection />

    </Layout>
  );
};

export default Index;
