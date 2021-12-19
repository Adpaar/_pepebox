import React from "react";
import { Container } from "react-bootstrap";
import { BasicTitle } from "./index";
import Cards from "./Cards/Cards";

export default function Investors() {
  return (
    <>
      <Container className="container-pad">
        <BasicTitle text="Our Major Investors" style="pb-4 text-whitee" />
        <Cards pairIds={["pinkcoin", "water", "paint-swap"]} />
      </Container>
    </>
  );
}
