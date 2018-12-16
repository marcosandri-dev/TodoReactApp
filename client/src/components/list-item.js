import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: this.props.todo
    };
  }

  render() {
    return (
      <div className="list-item">
        <div className="row">
          <div className="col-10">
            <li> {this.state.todo}</li>
          </div>
          <div className="col-1 text-center">
            <i className="far fa-edit" />
            <i
              style={{ marginLeft: "10px" }}
              className="fas fa-times"
              onClick={() => this.props.deleteTodo(this.props.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
