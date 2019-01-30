import React, { Component } from "react";
import http from "../services/http-service";
import ListDate from "./list-date";
import moment from "moment";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      dates: [],
      value: ""
    };
    this.loadTodos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos.length !== prevState.todos.length) {
      let dates = this.state.todos.map(todo =>
        moment(todo.created_date).format("DD/MM/YYYY")
      );
      dates = [...new Set(dates)];
      this.setState({ dates: dates });
    }
  }

  loadTodos = () => {
    http.getTodos(this.props.listName).then(res => {
      this.setState({ todos: res });
    });
  };

  addTodo = () => {
    const { value, todos } = this.state;
    if (value) {
      http.addTodo(value, this.props.listName).then(res => {
        this.setState({ todos: todos.concat(res), value: "" });
      });
    }
  };

  editTodo = (_id, params) => {
    http.editTodo(_id, params).then(() => {
      this.loadTodos();
    });
  };

  completeTodos = () => {
    const completedTodos = this.state.todos
      .filter(todo => todo.completed)
      .map(todo => todo._id);
    http.deleteTodo(completedTodos).then(this.loadTodos);
  };

  onChange = e => {
    let upper =
      e.target.value.charAt(0).toUpperCase() + e.target.value.substr(1);
    this.setState({ [e.target.name]: upper });
  };

  onKeyPress = e => {
    if (e.key === "Enter") this.addTodo();
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

          <div className="row justify-content-center pb-3 pt-3 mt-3 list">
            <div className="col-12">
              <h2>List: {this.props.listName}</h2>
              <hr />
              {this.state.todos.length === 0 ? (
                <p>No todos. Relax! :) </p>
              ) : (
                this.state.dates.map((date, index) => (
                  <ListDate
                    key={index}
                    editTodo={this.editTodo}
                    todos={this.state.todos}
                    date={date}
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
              onClick={this.completeTodos}
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
