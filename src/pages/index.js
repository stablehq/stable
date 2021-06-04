// Imports
import React from "react";

// CSS
// import * as IndexStyles from "./css/Index.module.css";

// Components
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import SummarySection from "../components/SummarySection";
import SignupSection from "../components/SignupSection";

// ======== Component ========
const Index = (props) => {
  return (
    <Layout 
      title="Site title"
      description="Home page example description"
    >

      <HeroSection />
      <SummarySection />
      <SignupSection />

    </Layout>
  );
};

export default Index;
