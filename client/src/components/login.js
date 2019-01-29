import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.clickDiv = React.createRef();
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onKeyPress = e => {
    if (e.key === "Enter" && this.state.usernameInput !== "")
      this.props.changeRoute("List", this.state.usernameInput);
  };

  render() {
    return (
      <div
        style={{ width: "80vw", maxWidth: "400px" }}
        className="login-form pl-4 pr-4 mx-auto mb-5"
      >
        <h2 className="text-center pt-3">Login!</h2>
        <hr />
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-user" />
              </span>
            </div>
            <input
              name="usernameInput"
              className="form-control"
              placeholder="username"
              type="text"
              value={this.state.usernameInput}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock" />
              </span>
            </div>
            <input
              name="passwordInput"
              class="form-control"
              placeholder="******"
              type="password"
              value={this.state.passwordInput}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
            />
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-lg btn-primary w-100 pt-2 pb-2 mb-3"
              onClick={() => this.props.changeRoute("list", this.state.value)}
            >
              Create List
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
