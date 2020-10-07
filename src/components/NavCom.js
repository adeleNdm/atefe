import React, { Component } from "react";
import "./FullPage.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
class FullPage extends Component {
  render() {
    return (
      <div>
        <Navbar className="" fixed="top"
        style={{width:"70%"}}>
        <Nav activeKey=""  >
          <Nav.Item as="li">
            <Nav.Link href="#About">About</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#Skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#Experience">Experience</Nav.Link>
          </Nav.Item>
        </Nav>
        </Navbar>
      </div>
    );
  }
}

export default FullPage;
