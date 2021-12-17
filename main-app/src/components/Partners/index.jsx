import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import PartnGlow from "./PartnGlow";
import PartnBala from "./PartnBala";
import PartnRiv from "./PartnRiv";
import PartnBotto from "./PartnBotto";
import { BasicTitle } from "../index";

export default function Partners() {
  return (
    <Container>
      <BasicTitle text="Our Partners" style={"text-whitee"} />
      <Row>
        <Col xs={3}>
          <PartnGlow />
        </Col>
        <Col xs={3}>
          <PartnBala />
        </Col>
        <Col xs={3}>
          <PartnRiv />
        </Col>
        <Col xs={3}>
          <PartnBotto />
        </Col>
      </Row>
    </Container>
  );
}
