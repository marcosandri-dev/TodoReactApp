import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.clickDiv = React.createRef();
    this.state = {
      value: ""
    };
  }

  onChange = e => {
    let upper =
      e.target.value.charAt(0).toUpperCase() + e.target.value.substr(1);
    this.setState({ [e.target.name]: upper });
  };

  onKeyPress = e => {
    if (e.key === "Enter") this.props.changeRoute("List", this.state.value);
  };

  render() {
    return (
      <div
        style={{ width: "80vw", maxWidth: "400px" }}
        className="login-form pl-4 pr-4 mx-auto mb-5"
      >
        <h3 className="text-center pt-3">Insert a list name!</h3>
        <hr />
        <input
          placeholder="ex. 'My shopping Cart'"
          id="login-input"
          type="text"
          className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          name="value"
        />
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
