import React from "react";

export default function BasicTitle(props) {
  return (
    <div>
      <h2 className={`fw-700 ${props.style}`}>{props.text}</h2>
    </div>
  );
}
