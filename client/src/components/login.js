import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = e => {
    let upper =
      e.target.value.charAt(0).toUpperCase() + e.target.value.substr(1);
    this.setState({ [e.target.name]: upper });
  };

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
            value={this.state.value}
            onChange={this.onChange}
            name="value"
          />
          <hr />
          <div className="row justify-content-center">
            <div className="col-12">
              <Link to={`/list/${this.state.value}`}>
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
