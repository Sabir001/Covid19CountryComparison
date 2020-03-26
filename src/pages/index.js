import React from "react";
import { Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "../components/active-plugin-count/Container";
import HistoryContainer from "../components/historical-data/HistoryContainer"

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Covid19 Country Comparison" pathName="/" />
    <Row>
      <Col xs="12" sm="12" md="3" lg="3">
        <Container />
      </Col>
      <Col xs="12" sm="12" md="9" lg="9">
        <HistoryContainer />
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
