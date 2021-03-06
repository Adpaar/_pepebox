import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroBubble from "../assets/images/hero-bubble.png";
import { NaavbarW, Cta, BasicTitle, BasicText, Hexagone } from "./index";

export default function HeroHexa() {
  return (
    <section className="hero-section">
      <NaavbarW />
      <Container className="container-pad">
        <Row className="align-items-center">
          <Col xs={6} className="">
            <div className="hero-text">
              <BasicTitle
                text="Hexa Tile, a hexagonal virtual world."
                style={"text-whitee"}
              />
              <BasicText
                text="Hexa Tile World is a game design by the gamers for the gamers. One Tile per 15 active players minimum"
                style={"text-whitee"}
              />
            </div>
            <Cta text={"Coming soon (Q2 2022)"} />
          </Col>
          <Col xs={6}>
            <div className="relative">
              <div className="hexa-move">
                <Hexagone />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
