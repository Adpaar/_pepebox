import React from "react";
import BasicTitle from "./BasicTitle";
import { Container } from "react-bootstrap";
import road from "../assets/images/road3.svg";

export default function Roadmap() {
  return (
    <Container className="roadmap-section ">
      <BasicTitle text="Roadmap" style="road-text text-whitee" />
      <div>
        <img src={road} alt="" />
      </div>
    </Container>
  );
}
