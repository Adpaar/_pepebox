import React from "react";
import { Container } from "react-bootstrap";
import { BasicTitle, BasicText } from "./index";
import Cards from "./Cards/Cards";

export default function Investors() {
  return (
    <>
      <Container className="container-pad">
        <BasicTitle text="Our Major Investors" />
        <BasicText text='"Cleaning" operation has already begun' />
        <Cards pairIds={["pinkcoin", "water", "paint-swap"]} />
      </Container>
    </>
  );
}
