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
          href="https://covid19comparison.iamsabir.com"
          style={{
            marginRight: "30px",
            textDecoration: "none"
          }}
          title="RSS Feed"
          target="_blank"
          rel="noopener noreferrer"
        >
          RSS
        </a>
        © {new Date().getFullYear()}, Sabir
        <a
          href="https://www.facebook.com/sabir01/"
          title="Sabir"
          style={{
            marginLeft: "30px",
            textDecoration: "none"
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
