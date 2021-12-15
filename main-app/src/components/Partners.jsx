import React from "react";
import { Container } from "react-bootstrap";
import { BasicTitle, Cards, DataCard } from "./index";

export default function Partners() {
  return (
    <>
      <Container>
        <BasicTitle text="Our Major Partners" />
        <Cards pairIds={["botto", "terra-luna", "bitcoin"]} />
        <DataCard />
      </Container>
    </>
  );
}
