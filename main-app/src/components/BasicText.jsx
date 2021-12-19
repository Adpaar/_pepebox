import React from "react";

export default function BasicText(props) {
  return (
    <div>
      <p className={`basicText ${props.style}`}>{props.text}</p>
    </div>
  );
}
