import React, { Component, Fragment } from "react";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <div className="container">
                <div className="nav-item">
                  <a
                    href="localhost:3000/signup"
                    className="nav-link text-gold"
                  >
                    <i className="input-group-text fas fa-user-circle bg-transparent text-gold border-0 m-auto"></i>
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
