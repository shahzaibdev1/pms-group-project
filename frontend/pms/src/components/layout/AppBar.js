import React, { Component, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
class AppBar extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="dark">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Link className="text-gold" to="/register">
                <i className="input-group-text fas fa-user-circle bg-transparent text-gold border-0 m-auto"></i>
                Log In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default AppBar;
