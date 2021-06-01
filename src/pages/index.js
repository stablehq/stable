// Imports
import React from "react";

// CSS
// import * as IndexStyles from "./css/Index.module.css";

// Components
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

// ======== Component ========
const Index = (props) => {
  return (
    <Layout 
      title="Site title"
      description="Home page example description"
    >

      <HeroSection />

    </Layout>
  );
};

export default Index;
