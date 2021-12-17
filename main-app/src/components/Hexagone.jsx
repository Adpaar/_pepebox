import React from "react";
import hexaV from "../../src/assets/spline/hexa.mp4";

export default function Hexagone() {
  return (
    <div className="spline-container">
      <video autoPlay muted playsInline src={hexaV}></video>
    </div>
  );
}
