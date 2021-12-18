import React from "react";
import BasicTitle from "./BasicTitle";
import { Container } from "react-bootstrap";
import road from "../assets/images/road2.svg";

export default function Roadmap() {
  return (
    <Container className="roadmap-section ">
      <BasicTitle text="Roadmap" style="road-text" />
      <div>
        <img src={road} alt="" />
      </div>
    </Container>
  );
}
