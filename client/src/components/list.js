import React, { Component } from "react";
import ListItem from "./list-item";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      value: "",
      count: 3
    };
    this.addTodo = this.addTodo.bind(this);
    this.loadTodos = this.loadTodos.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.loadTodos();
  }

  addTodo = function() {
    console.log(this.state.value);
    axios
      .post("http://localhost:8000/api/todos", {
        name: this.state.value
      })
      .then(res => {
        var oldTodos = this.state.todos;
        oldTodos.push(res.data);
        this.setState({ todos: oldTodos });
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  loadTodos = function() {
    axios
      .get("http://localhost:8000/api/todos")
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  deleteTodo = function(_id) {
    axios
      .delete("http://localhost:8000/api/todos/" + _id)
      .then(res => {
        this.loadTodos();
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  editTodo = function(_id, editedTodo) {
    axios
      .put("http://localhost:8000/api/todos/" + _id, {
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
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="row justify-content-center">
            <div className="col-10">
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

          <div className="row justify-content-center list">
            <div className="col-12">
              {this.state.todos == 0 ? (
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
