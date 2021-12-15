import React from "react";
import {
  Hero,
  Description,
  Roadmap,
  Partners,
  Footer,
} from "../components/index";

export default function Soap() {
  return (
    <div className="soap-page">
      <Hero />
      <Description />
      <Roadmap />
      <Partners />
      <Footer />
    </div>
  );
}
