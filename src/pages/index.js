import React from "react";
import { Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "../components/active-plugin-count/Container";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Covid19 Country Comparison" pathName="/" />
    <Row>
      <Col md="7" lg="7">
        <Container />
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
