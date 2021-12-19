import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Modall, BasicText, BasicTitle } from "./index";

export default function Description() {
  return (
    <section className="desc-section">
      <Container className=" container-pad">
        <BasicTitle
          className="text-center mb-3"
          text="How it works?"
          style="text-whitee"
        />

        <Row className=" text-justify">
          <Col xs={3}>
            <BasicText
              text="Just need to connect and Soap will analize your wallet and
                detect the quantity of poocoin you have."
              style="text-whitee"
            />
          </Col>
          <Col xs={3}>
            <BasicText
              text=" After, our smart contract will sell for you all this poo and buy
                the same amount in SOAP."
              style="text-whitee"
            />
          </Col>
          <Col xs={3}>
            <BasicText
              text="Hit Mike kindly, he will show you how to clean"
              style="text-whitee"
            />
          </Col>
          <Col xs={3}>
            <Modall />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
