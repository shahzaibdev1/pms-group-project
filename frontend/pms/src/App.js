import React, { Component, Fragment } from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import Login from "./components/layout/Login";
import "@fortawesome/fontawesome-free/css/all.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Login />
      </Fragment>
    );
  }
}

export default App;
