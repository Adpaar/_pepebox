import React from "react";

export default function Cta(props) {
  return (
    <>
      <a href={props.href} className={`cta ${props.style}`} target="_blank">
        {props.text}
      </a>
    </>
  );
}
