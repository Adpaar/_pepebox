import React from "react";
import Slides from "./Slides.jsx";

export default function Slider() {
  return (
    <Slides>
      <div
        key="slze1"
        className="slide"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501876991173-f9c47cd28268?auto=format&fit=crop&w=1606&q=80)",
        }}
      >
        <h2>Awesome Slide Title 1</h2>
      </div>
      <div
        key="sldse1"
        className="slide"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=1650&q=80)",
        }}
      >
        <h2>Awesome Slide Title 2</h2>
      </div>
      <div
        key="slqde1"
        className="slide"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=2848&q=80)",
        }}
      >
        <h2>Awesome Slide Title 3</h2>
      </div>
      <div
        key="sldde1"
        className="slide"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=2848&q=80)",
        }}
      >
        <h2>Awesome Slide Title 4</h2>
      </div>
      <div
        key="sldce1"
        className="slide"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=2848&q=80)",
        }}
      >
        <h2>Awesome Slide Title 5</h2>
      </div>
    </Slides>
  );
}
