import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Cta } from "./index";
import logo from "../assets/brand/soap-logo.svg";

export default function Naavbar(props) {
  return (
    <nav>
      <Navbar className={`container--navbar  py-4 ${props.style}`}>
        <Container>
          <Navbar.Brand href="" className="nav-braand ">
            <div>
              <img
                alt="logo-soap"
                src={logo}
                width="50"
                className="d-inline-block align-top fw-bold"
              />
            </div>
            <div>
              <span className="nav-liink3">Soap Network</span>
            </div>
          </Navbar.Brand>
          <Nav className="justify-content-end align-items-center pr-5 nav-liink nav-liink3">
            <Nav.Link as={Link} to="/" className="mx-3 pt-0 ">
              Bubble Stacking
            </Nav.Link>
            <Nav.Link as={Link} to="/hexa" className="mx-3 pt-0">
              Hexa Tile
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-3 pt-0">
              About
            </Nav.Link>
            <Cta style="cta-connect" text="Connect" />
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
}
