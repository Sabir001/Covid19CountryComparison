import React from "react";
import { Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import RecentDataContainer from "../components/recent-data/RecentDataContainer";
import HistoryContainer from "../components/historical-data/HistoryContainer"

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Covid19 Country Comparison" pathName="/" />
    <Row>
      <Col xs="12" sm="12" md="4" lg="4">
        <RecentDataContainer />
      </Col>
      <Col xs="12" sm="12" md="8" lg="8">
        <HistoryContainer />
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
