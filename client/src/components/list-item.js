import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editToggle: false,
      editTodo: this.props.todo,
      textDeco: "none"
    };
  }

  toggleEdit = () => {
    this.setState({ editToggle: !this.state.editToggle });
  };

  toggleComplete = () => {};

  editTodo = () => {
    this.props.editTodo(this.props.id, this.state.editTodo);
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
    return (
      <div className="list-item">
        {this.state.editToggle === true ? (
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                className="form-control form-control-sm"
                value={this.state.editTodo}
                onChange={this.onChange}
                onKeyPress={this.onKeyPress}
                name="editTodo"
              />
            </div>
            <div className="col">
              <button
                onClick={this.editTodo}
                type="button"
                className="btn btn-sm btn-primary"
                style={{ marginRight: "5px" }}
              >
                Edit
              </button>
              <button
                onClick={this.toggleEdit}
                type="button"
                className="btn btn-sm btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="row justify-content-between p-1 border-rounded">
            <div
              className="col"
              onClick={() =>
                this.state.textDeco === "none"
                  ? this.setState({ textDeco: "line-through" })
                  : this.setState({ textDeco: "none" })
              }
            >
              <span>- </span>
              <span
                className="todo-text"
                style={{ textDecoration: this.state.textDeco }}
              >
                {this.props.todo}
              </span>
            </div>
            <div className="col-auto">
              <i className="far fa-edit" onClick={this.toggleEdit} />
              <i
                className="fas fa-times ml-2"
                onClick={() => this.props.deleteTodo(this.props.id)}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ListItem;
