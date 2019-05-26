import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }

  handleOpen = () => {
    this.setState({
      opened: true
    });
  };

  handleClose = () => {
    this.setState({
      opened: false
    });
  };

  render() {
    const { opened } = this.state;
    if (opened) {
      return (
        <div className="sidenav">
          <div className="side">
            <Button variant="outline-primary" className="white">
              BLOG
            </Button>
            <br />
            <Button variant="outline-primary" className="white">
              TIPY
            </Button>
            <br />
            <Button variant="outline-primary" className="white">
              CONTACT US
            </Button>
            <br />
            <Button variant="outline-primary" className="white">
              MY SECTION
            </Button>
            <br />
          </div>
          <Button
            variant="outline-primary"
            className="closebut"
            onClick={this.handleClose}
          >
            CLOSE
          </Button>
        </div>
      );
    }
    if (!opened)
      return (
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      );
  }
}

//<Link to={`Menu`}>ABOUT</Link>
