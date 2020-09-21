import React, { Component, Fragment } from "react";

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
                <form className="form-group text-light">
                  <div className="bg-white rounded-pill">
                    <label
                      htmlFor="username"
                      style={{ top: "158px", left: "60px", zIndex: "1" }}
                      className="rounded-pill bg-gold px-3 position-absolute"
                    >
                      Username
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        className="form-control border-0"
                        style={{ borderRadius: "10px" }}
                      />
                      <div className="input-group-append">
                        <i className="input-group-text fas fa-user-circle bg-transparent text-gold border-0 m-auto"></i>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white mt-5 rounded-pill">
                    <label
                      htmlFor="username"
                      style={{ top: "242px", left: "60px", zIndex: 1 }}
                      className="rounded-pill bg-gold px-3 position-absolute"
                    >
                      Password
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        className="form-control border-0"
                        style={{ borderRadius: "10px" }}
                      />

                      <div className="input-group-append">
                        <i className="input-group-text fas fa-fingerprint text-gold bg-transparent border-0 m-auto"></i>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="btn bg-gold btn-block rounded-pill text-light">
                      Login
                    </button>
                  </div>
                </form>
                <a href="localhost:3000/reset-password" className="text-gold">
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
