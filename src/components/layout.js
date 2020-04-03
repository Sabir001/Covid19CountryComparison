/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import "./layout.css";
import "./loader.css";
import "../styles/index.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Build your dream company together" />
      <div
        style={{
          margin: `0 auto`,
          marginTop: 85,
          maxWidth: 1150,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
      >
        <main>{children}</main>
      </div>
      <footer className="site-footer">
        <a
          href="https://twitter.com/SharafatSabir"
          style={{
            marginRight: "30px",
            textDecoration: "none"
          }}
          title="Sabir twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        © {new Date().getFullYear()}, Sabir
        <a
          href="https://www.linkedin.com/in/sharafat-ahmed-sabir/"
          title="Sabir LinkedIn"
          style={{
            marginLeft: "30px",
            textDecoration: "none"
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
