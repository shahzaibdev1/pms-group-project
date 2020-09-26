import React, { Component, Fragment } from "react";
import AppBar from "./components/layout/AppBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./components/layout/Register";
import Login from "./components/layout/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <AppBar />
          <Route path="/" component={Login} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Router>
      </Fragment>
    );
  }
}

export default App;
