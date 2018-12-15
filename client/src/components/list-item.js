import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: this.props.todo
    };
    //this.deleteTodo = this.deleteTodo.bind(this);
  }

  /*deleteTodo = function() {
    axios.delete("http://localhost:8000/api/todos").then(res => {
      this;
    });
  };*/

  render() {
    return (
      <div className="list-item">
        <div className="row">
          <div className="col-10">
            <li> {this.state.todo}</li>
          </div>
          <div className="col-1 text-center">
            <i class="far fa-edit" />
            <i style={{ marginLeft: "10px" }} class="fas fa-times" />
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
