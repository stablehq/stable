// Imports
import React from "react";
import PropTypes from "prop-types";

// CSS
import * as LayoutStyles from "./css/Layout.module.css";

// Components
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

// ======== Component ========
const Layout = (props) => {
  return (
    <div className={`flex w100 ${LayoutStyles.layout}`}>
      <SEO 
        title={props.title} 
        description={props.description}
      />
      
      <Header />

      <main className={LayoutStyles.layoutMain}>
        {props.children}
      </main>

      <Footer />
    </div>
  );
};

// Prop validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Layout.defaultProps = {
  description: "Balanced Body",
};

export default Layout;
