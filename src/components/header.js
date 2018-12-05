import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row text-center">
          <div className="col">
            <h1 style={{ fontSize: "80px", marginTop: "15px" }}>
              ToDoList
              <span style={{ fontSize: "40px" }} />
            </h1>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
