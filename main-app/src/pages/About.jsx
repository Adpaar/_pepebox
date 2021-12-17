import React from "react";
import {
  NaavbarW,
  Description,
  Footer,
  Slider,
  DescriptionAbout,
} from "../components/index";

export default function About() {
  return (
    <div className="about-page">
      <NaavbarW style="bg-grad " />
      <DescriptionAbout />
      <Footer />
    </div>
  );
}
