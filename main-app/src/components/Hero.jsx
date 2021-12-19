import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroBubble from "../assets/images/hero-bubble.png";
import { NaavbarW, Cta, BasicTitle, BasicText } from "./index";

export default function Hero() {
  return (
    <section className="hero-section">
      <NaavbarW />
      <Container className="container-pad">
        <Row className="align-items-center">
          <Col className="">
            <div className="hero-text">
              <BasicTitle
                text="Stake a token who smells good!"
                style="text-whitee"
              />
              <BasicText
                text="Clean your wallet full of poocoin with SOAP, join the bubble and
                let's grow together!"
                style="text-whitee"
              />
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
