import React from "react";
import { Naavbar, Description, Footer } from "../components/index";

export default function About() {
  return (
    <div className="about-page">
      <Naavbar style="bg-grad" />
      <Description />
      <Footer />
    </div>
  );
}
