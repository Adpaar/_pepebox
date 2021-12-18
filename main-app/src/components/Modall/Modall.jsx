import React, { useState } from "react";
import bob from "./spongbob.png";
import bobgif from "./bob.gif";
import { Modal } from "react-bootstrap";

export default function Modall() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div onClick={handleShow}>
        <img className="bob-width" src={bob} alt="bob" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <img className="" src={bobgif} alt="bobgif" />
      </Modal>
    </div>
  );
}
