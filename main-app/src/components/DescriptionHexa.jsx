import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Cta } from "./index";

export default function DescriptionHexa() {
  return (
    <section className="desc-section">
      <Container className=" container-pad">
        <Row className="align-items-center">
          <Col xs={7} className="pb-5">
            <div className="hero-text">
              <h2 className="hero-title text-whitee">
                More than 50 000 tiles available
              </h2>
              <p className="hero-text text-whitee">
                Each side of the tile of the a hexagon is equivalent to 100
                meters, so 25km2 per Tile. The main propertie of Hexa World is
                the Tile can be swap between them.
              </p>
              <p className="text-whitee">
                At the end of each season (1mo) you have to possibility to vote
                for the swap of your tile and meet new friends.
              </p>
              <p className="text-whitee">
                As a decentralized game, we believe the brands who want to buy
                ads space do not have their place here.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col xs={7} className="pt-5 ">
            <div className="hero-text">
              <h2 className="hero-title text-whitee">
                More you play, more you earn bonus.
              </h2>
              <p className="text-whitee">
                One of the craziest advantage to be active on Hexa is: you can
                have the right to move your tile on the Y axis and appreciate
                the view.
              </p>
              <p className="hero-text text-whitee">
                You can not buy a Tile solo, you have to be 10 minimum. And a
                guild can buy another tile after 4mo for the second tile and a
                year for the third one.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
