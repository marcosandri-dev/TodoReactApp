import React, { Component } from "react";
import ListItem from "./list-item";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      value: "",
      apiURL: "http://localhost:8000",
      listname: this.props.match.params.listname
    };
    this.loadTodos();
  }

  //apiURL: "https://hidden-island-12178.herokuapp.com"
  //apiURL: "http://localhost:8000"

  addTodo = () => {
    const { value, todos, apiURL, listname } = this.state;
    axios
      .post(`${apiURL}/api/todos`, {
        name: value,
        user: listname
      })
      .then(res => {
        var oldTodos = todos;
        oldTodos.push(res.data);
        this.setState({ todos: oldTodos, value: "" });
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  loadTodos = () => {
    const { apiURL, listname } = this.state;
    axios
      .get(`${apiURL}/api/todos/${listname}`)
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  deleteTodo = _id => {
    axios
      .delete(`${this.state.apiURL}/api/todos/${_id}`)
      .then(res => {
        this.loadTodos();
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  editTodo = (_id, editedTodo) => {
    axios
      .put(`${this.state.apiURL}/api/todos/${_id}`, {
        name: editedTodo
      })
      .then(res => {
        this.loadTodos();
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  onChange = e => {
    let upper =
      e.target.value.charAt(0).toUpperCase() + e.target.value.substr(1);
    this.setState({ [e.target.name]: upper });
  };

  onKeyPress = e => {
    if (e.key === "Enter") {
      this.addTodo();
    }
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="row justify-content-between">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Insert a ToDo!"
                name="value"
                id="todo-input"
                value={this.state.value}
                onChange={this.onChange}
                onKeyPress={this.onKeyPress}
              />
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.addTodo}
              >
                Add
              </button>
            </div>
          </div>

          <div className="row justify-content-center list">
            <div className="col-12">
              {!this.state.todos ? (
                <p>No todos! Relax. :) </p>
              ) : (
                this.state.todos.map(todo => (
                  <ListItem
                    key={todo._id}
                    todo={todo.name}
                    id={todo._id}
                    deleteTodo={this.deleteTodo}
                    editTodo={this.editTodo}
                  />
                ))
              )}
            </div>
          </div>

          <hr />

          <div className="mb-4 mt-4 row justify-content-around">
            <button
              type="button"
              className="btn btn-lg btn-success pl-5 pr-5 pt-2 pb-2"
            >
              Complete!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
