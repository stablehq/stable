// Imports
import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// CSS
import * as IndexStyles from "./css/Index.module.css";

// Components
import Layout from "../components/Layout";

// ======== Component ========
const Index = (props) => {
  return (
    <Layout 
      title="Site title"
      description="Home page example description"
    >
      <h1 className={`f-h1 ${IndexStyles.title}`}>Index</h1>
      <Link to="/about">About</Link>
      <StaticImage 
        src="../assets/images/dog.jpg"
        alt="A dog"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
    </Layout>
  );
};

// export const query = graphql`     <-- Query images in assets/images, returns props.data as obj
//   query HomePageQuery {
//     allFile(filter: {relativePath: {regex: "/(trending-)/"}}) {
//       edges {
//         node {
//           childImageSharp {
//             gatsbyImageData(
//               quality: 100,
//               width: 700, 
//               placeholder: DOMINANT_COLOR,
//               layout: CONSTRAINED
//             )
//           }
//           name
//         }
//       }
//     }
//   }  
// `;

export default Index;
