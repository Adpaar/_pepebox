import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroBubble from "../assets/images/hero-bubble.png";
import { Naavbar, Cta, BasicTitle, BasicText } from "./index";

export default function Hero() {
  return (
    <section className="hero-section">
      <Naavbar />
      <Container className="container-pad">
        <Row className="align-items-center">
          <Col className="">
            <div className="hero-text">
              <BasicTitle text="Metaverse" />
              <BasicText text="Acheter du terrain" />
            </div>
            <Cta text={"Coming soon (Q2 2022"} />
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
