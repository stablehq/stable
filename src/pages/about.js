// Imports
import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// CSS
import * as AboutStyles from "./css/About.module.css";

// Components
import Layout from "../components/Layout";

// ======== Component ========
const About = (props) => {
  return (
    <Layout 
      title="About"
      description="About page example description"
    >
      <h1 className={`f-h1 ${AboutStyles.title}`}>About</h1>
      <Link to="/">Home</Link>
      <StaticImage 
        src="../assets/images/cat.jpg"
        alt="A cat"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
    </Layout>
  );
};

export default About;