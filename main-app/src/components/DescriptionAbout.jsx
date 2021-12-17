import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Cta, BasicTitle, BasicText } from "./index";
import adri from "../../src/assets/brand/adri.png";
import idra from "../../src/assets/brand/idra.png";

export default function DescriptionAbout() {
  return (
    <section className="desc-section">
      <Container className=" container-pad">
        <Row className="align-items-center">
          <Col xs={6} className="pb-5">
            <BasicTitle
              style={"space"}
              text={"Adri didn't type a single line of code on this project..."}
            />
          </Col>
          <Col xs={6} className="pb-5">
            <div>
              <img src={adri} alt="" className="brand-pic" />
            </div>
          </Col>
          <Col xs={6} className="pb-5">
            <BasicTitle style={"space"} text={"Like he usually does"} />
          </Col>
          <Col xs={6} className="pb-5"></Col>
          <Col xs={8} className="pb-5">
            <BasicTitle
              style={"space"}
              text={"in times of stress or great emotion:"}
            />
          </Col>
          <Col xs={4} className="pb-5"></Col>
          <Col xs={6} className="pb-5">
            <BasicTitle style={"space"} text={"He calls me"} />
          </Col>
          <Col xs={6} className="pb-5"></Col>
          <Col xs={6} className="pb-5">
            <BasicTitle
              style={"space"}
              text={"Welcome to my meme coin first React based website"}
            />
          </Col>

          <Col xs={6} className="pb-5"></Col>
          <Col xs={6} className="pb-5">
            <BasicTitle style={"space"} text={"..."} />
          </Col>
          <Col xs={6} className="pb-5"></Col>

          <Col xs={8} className="pb-5">
            <BasicTitle
              style={"space"}
              text={"I'm sure Agus, Leños and Selo"}
            />
          </Col>
          <Col xs={4} className="pb-5"></Col>
          <Col xs={7} className="pb-5">
            <BasicTitle
              style={"space"}
              text={"have already met me in Anceu."}
            />
          </Col>
          <Col xs={5} className="pb-5"></Col>
          <Col xs={8} className="pb-5">
            <BasicTitle
              style={"space"}
              text={"I am lonely, introverted and more quiet than Adri"}
            />
          </Col>
          <Col xs={4} className="pb-5"></Col>
          <Col xs={8} className="pb-5">
            <BasicTitle
              style={"space"}
              text={"But also more quick-witted, creative and hardworker"}
            />
          </Col>
          <Col xs={4} className="pb-5"></Col>
          <Col xs={8} className="pb-5">
            <BasicTitle
              style={"space"}
              text={"Over the past year, I have become more and more dominant"}
            />
          </Col>
          <Col xs={4} className="pb-5"></Col>

          <Col xs={7} className="pb-5">
            <BasicTitle
              style={"space"}
              text={"Stress him with short deadlines..."}
            />
          </Col>
          <Col xs={5} className="pb-5"></Col>
          <Col xs={6} className="pb-5">
            <BasicTitle style={"space"} text={"...and I will answer you"} />
          </Col>
          <Col xs={6} className="pb-5"></Col>
          <Col xs={6} className="pb-5">
            <BasicTitle style={"space"} text={"..."} />
          </Col>
          <Col xs={6} className="pb-2"></Col>
          <Col xs={6} className="pb-5">
            <BasicTitle style={"space"} text={"Idra"} />
          </Col>
          <Col xs={6} className="pb-2">
            <div>
              <img src={idra} alt="" className="brand-pic" />
            </div>
          </Col>
          <Col xs={6} className="pb-3"></Col>
          <Col xs={6} className="pb-3">
            <div className="pt-3">
              <BasicText text={"Join me in the Doc, I have to talk to you."} />
              <Cta text={"Here"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
