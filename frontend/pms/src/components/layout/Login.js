import React, { Component, Fragment } from "react";
import { TextFieldGroup } from "../common/TextFieldGroup";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className="container mt-5">
          <div
            className="card col-xs-8 col-md-6 col-xl-4 offset-xl-4 offset-md-3 bg-dark"
            style={{ borderRadius: "30px" }}
          >
            <div style={{ height: "150px" }}></div>
            <div className="container">
              <div className="card-body text-center">
                {/* Login Form */}
                <form className="form-group text-light">
                  <TextFieldGroup
                    labelStyle={{ top: "158px", left: "60px", zIndex: 4 }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="username"
                    placeholder="Username"
                    icon="fa-user-circle"
                    labelText="Username"
                  />

                  <TextFieldGroup
                    labelStyle={{ top: "244px", left: "60px", zIndex: 4 }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="password"
                    className="mt-5"
                    placeholder="Password"
                    icon="fa-fingerprint"
                    labelText="Password"
                  />

                  <div className="mt-4">
                    <button className="btn bg-gold btn-block rounded-pill text-light">
                      Login
                    </button>
                  </div>
                </form>
                <a href="/reset-password" className="text-gold">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
