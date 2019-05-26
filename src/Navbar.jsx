import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home" />
          <Nav className="mr-auto">
            <Link to="/" style={{ color: "#ffffff" }}>
              Home
            </Link>
            <Link to="/prispevky" style={{ color: "#ffffff" }}>
              Prispevky
            </Link>
            <Link to="/blog" style={{ color: "#ffffff" }}>
              Blog
            </Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
