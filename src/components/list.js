import React, { Component } from "react";
import ListItem from "./list-item";

class List extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todos: [
        { id: 1, name: "cose" },
        { id: 2, name: "altre cose" },
        { id: 3, name: "troppe cose" }
      ],
      value: "",
      count: 3
    };
  }

  addTodo = function() {
    //this.setState({todos: [{id: this.state.count, name: this.state.value }]);
    //this.setState({ count: count + 1 });
    //this.state.todos.push(this.state.value);
    alert(this.state.value);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="row justify-content-center">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Insert a ToDo!"
                name="value"
                value={this.state.value}
                onChange={this.onChange}
              />
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.addTodo}
              >
                Add
              </button>
            </div>
          </div>

          {this.state.todos == 0 ? (
            <div className="row justify-content-center">
              <div className="col-10">
                <p>No todos! Relax. :) </p>
              </div>
            </div>
          ) : (
            this.state.todos.map(todo => (
              <ListItem key={todo.id} todo={todo.name} />
            ))
          )}

          <hr />

          <div
            style={{ marginBottom: "30px", marginTop: "30px" }}
            className="row justify-content-around"
          >
            <div className="col-5 col-md-3">
              <a href="#" className="btn btn-info btn-block">
                Archive
              </a>
            </div>
            <div className="col-5 col-md-3">
              <button type="button" className="btn btn-success btn-block">
                Completa Todos
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
