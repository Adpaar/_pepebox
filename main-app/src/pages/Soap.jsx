import React from "react";
import {
  Hero,
  Description,
  Roadmap,
  Investors,
  /* Partners, */
  Footer,
} from "../components/index";

export default function Soap() {
  return (
    <div className="soap-page">
      <Hero />
      <Description />
      <Roadmap />
      <Investors />
      {/* <Partners /> */}
      <Footer />
      <div class="cursor"></div>
    </div>
  );
}
