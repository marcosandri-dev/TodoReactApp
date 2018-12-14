import React, { Component } from "react";

class ListItem extends Component {
  state = {
    todo: this.props.todo
  };
  render() {
    return (
      <div className="list-item">
        <div className="row">
          <div className="col-1">
            <input type="checkbox" className="form-check-input" />
          </div>
          <div className="col-11">
            <span>{this.state.todo}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
