import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-4 login-form ">
          <h1 className="text-center p-3">"Login..."</h1>
          <hr />
          <label for="login-input">Insert a random list name:</label>
          <input
            placeholder="ex. 'The magnificent todolist of Thor'"
            id="login-input"
            type="text"
            className="form-control"
          />
          <hr />
          <div className="row justify-content-center">
            <div className="col-12">
              <Link to={"/list"}>
                <button
                  type="button"
                  className="btn btn-lg btn-primary w-100 pt-2 pb-2 mb-3"
                >
                  Login...
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
