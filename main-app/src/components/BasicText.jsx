import React from "react";

export default function BasicText(props) {
  return (
    <div>
      <p className={`hero-text ${props.style}`}>{props.text}</p>
    </div>
  );
}
