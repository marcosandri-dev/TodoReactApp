import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    //if (e.key === "Enter") this.clickDiv.current.click();
    console.log("Entered Login");
  };

  render() {
    return (
      <div
        style={{ width: "80vw", maxWidth: "400px" }}
        className="login-form pl-4 pr-4 mx-auto"
      >
        <h1 className="text-center p-3">"Login..."</h1>
        <hr />
        <label htmlFor="login-input">Insert a list name:</label>
        <input
          placeholder="ex. 'My shopping List'"
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
            <Link to={`/list/${this.state.value}`} ref={this.clickDiv}>
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
    );
  }
}

export default Login;
