import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Error 404</h1>
      <button onClick={() => navigate("/")}>Click to go back Home</button>
    </div>
  );
}
