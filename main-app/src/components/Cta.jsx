import React from "react";

export default function Cta(props) {
  return (
    <>
      <button className={`cta ${props.style}`}>{props.text}</button>
    </>
  );
}
