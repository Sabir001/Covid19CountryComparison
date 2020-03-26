import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Image = ({ src, width, topMargin, alt, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () => data.allFile.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  );

  return (
    <Img
      style={{
        maxWidth: width ? `${width}px` : undefined,
        width: width ? `${width}px` : undefined,
        marginTop: topMargin ? `${topMargin}px` : undefined,
        display: "inline-block"
      }}
      alt={alt}
      title={alt}
      fluid={match.node.childImageSharp.fluid}
      {...props}
    />
  );
};

export default Image;
