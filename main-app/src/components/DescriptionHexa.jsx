import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Cta } from "./index";

export default function Description() {
  return (
    <section className="desc-section">
      <Container className="desc-container container-pad">
        <Row className="align-items-center">
          <Col xs={7} className="pb-5">
            <div className="hero-text">
              <h2 className="hero-title">Smell good, feel good</h2>
              <p className="hero-text">To start cleaning your</p>
            </div>
            <Cta text={"Mike"} />
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col xs={7} className="pt-5 ">
            <div className="hero-text">
              <h2 className="hero-title">How it works?</h2>
              <p className="hero-text">
                Our Api connect to your wallet and analize the number of poocoin
                you have, after, our smart contract will sell for you all this
                shit and buy the same amount in SOAP. Grab the Mike to start
                cleaning
              </p>
            </div>
            <Cta text={"Mike"} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
