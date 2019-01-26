import React, { Component } from "react";
import EditTodoInput from "./edit-todo-input";

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editTodoInputValue: this.props.todo.name,
      editInputToggle: false,
      textDeco: "none"
    };
  }

  toggleEdit = () => {
    this.setState({ editInputToggle: !this.state.editInputToggle });
  };

  editTodo = () => {
    this.props.editTodo(this.props.todo._id, {
      name: this.state.editTodoInputValue
    });
    this.toggleEdit();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onKeyPress = e => {
    if (e.key === "Enter") {
      this.editTodo();
    }
  };

  render() {
    const { completed, name, _id } = this.props.todo;
    return (
      <div>
        {this.state.editInputToggle === true ? (
          <EditTodoInput
            editTodo={this.editTodo}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            toggleEdit={this.toggleEdit}
            editTodoInputValue={this.state.editTodoInputValue}
          />
        ) : (
          <div className=" list-item row justify-content-between p-1 border-rounded">
            <div
              className="col"
              onClick={() =>
                this.props.editTodo(_id, {
                  completed: !completed
                })
              }
            >
              <input
                type="checkbox"
                className="mr-2"
                readOnly
                checked={completed}
              />
              <span
                className="todo-text"
                style={
                  completed === true
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {name}
              </span>
            </div>
            <div className="col-auto">
              <i className="far fa-edit mr-2" onClick={this.toggleEdit} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ListItem;
