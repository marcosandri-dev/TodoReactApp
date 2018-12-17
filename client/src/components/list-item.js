import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editToggle: false,
      editTodo: this.props.todo
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  toggleEdit = function() {
    this.setState({ editToggle: !this.state.editToggle });
  };

  editTodo = function() {
    this.props.editTodo(this.props.id, this.state.editTodo);
    this.toggleEdit();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="list-item">
        {this.state.editToggle == true ? (
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                className="form-control form-control-sm"
                value={this.state.editTodo}
                onChange={this.onChange}
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
          <div className="row">
            <div className="col-10">
              <li> {this.props.todo}</li>
            </div>
            <div className="col-1 text-center">
              <i className="far fa-edit" onClick={this.toggleEdit} />
              <i
                style={{ marginLeft: "10px" }}
                className="fas fa-times"
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
