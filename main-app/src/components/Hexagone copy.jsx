import React, { useState, useEffect } from "react";
import { Application } from "./hexa/runtime.js";

export default function Hexagone() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("./scene.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="spline-container">
      <canvas id="canvas3d"></canvas>
    </div>
  );
}
