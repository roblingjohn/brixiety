import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const OTNavbar = () => {
  return (
    <div>
      <Navbar className="navbar">
        <Navbar.Brand>
          <Link to="/" className="brandLink navLink">
            BRIXIETY
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="navlink">
              Home
            </Link>
            <Link to="/archive" className="navlink">
              Archive
            </Link>
            <Link to="/about" className="navlink">
              About
            </Link>
            <Link to="/socials" className="navlink">
              Socials
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default OTNavbar;
