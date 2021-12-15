import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroBubble from "../assets/images/hero-bubble.png";
import { Naavbar, Cta, BasicTitle } from "./index";

export default function Hero() {
  return (
    <section className="hero-section">
      <Naavbar />
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col className="">
            <div className="hero-text">
              <BasicTitle text="Stake a token who smells good!" />
              <p className="hero-text">
                Clean your wallet full of poocoin with SOAP, join the bubble and
                let's grow together!
              </p>
            </div>
            <Cta text={"Stake Now"} />
          </Col>
          <Col className="mx-auto">
            <div className="d-flex justify-content-center">
              <img className="hero-bubble" src={heroBubble} alt="bubble" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
