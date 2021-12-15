import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Cta } from "./index";

export default function Naavbar() {
  return (
    <nav>
      <Navbar className="container--navbar mb-5 pt-3">
        <Container>
          <Navbar.Brand href="" className="nav-braand">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top fw-bold"
            />{" "}
            Soap Network
          </Navbar.Brand>
          <Nav className="justify-content-end align-items-center pr-5 nav-liink">
            <Nav.Link as={Link} to="/" className="mx-3 pt-0 ">
              Bubble Stacking
            </Nav.Link>
            <Nav.Link as={Link} to="/hexa" className="mx-3 pt-0">
              Hexa Tile
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-3 pt-0">
              About
            </Nav.Link>
            <Cta text="Connect" />
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
}
