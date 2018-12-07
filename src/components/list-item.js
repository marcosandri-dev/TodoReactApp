import React, { Component } from "react";

class ListItem extends Component {
  state = {};
  render() {
    return (
      <div className="list-item">
        <div className="row">
          <div className="col-1">
            <input type="checkbox" className="form-check-input" />
          </div>
          <div className="col-11">
            <span>
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet m dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
