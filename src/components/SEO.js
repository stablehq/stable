// Imports
import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

// ======== Component ========
const SEO = (props) => {
  return (
    // Supports all valid head tags: title, base, meta, link, script, noscript, and style tags.
    // Supports attributes for body, html and title tags.
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="canonical" href="http://localhost:8000/" />
    </Helmet>
  );
};

export default SEO;