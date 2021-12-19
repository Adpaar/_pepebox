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
      <BasicTitle text="Our Partners" style="text-whitee pb-4" />
      <Row className="partne">
        <Col xs={3}>
          <div className="PartnerCoin px-2">
            <PartnGlow />
          </div>
        </Col>
        <Col xs={3}>
          <div className="PartnerCoin px-2">
            <PartnBala />
          </div>
        </Col>
        <Col xs={3}>
          <div className="PartnerCoin px-2">
            <PartnRiv />
          </div>
        </Col>
        <Col xs={3}>
          <div className="PartnerCoin px-2">
            <PartnBotto />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
