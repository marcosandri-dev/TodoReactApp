import React, { Component } from "react";
import ListItem from "./list-item";

class List extends Component {
  state = {};
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="row justify-content-center">
            <div className="col-8">
              <input
                type="text"
                id="todoText"
                className="form-control"
                placeholder="Insert a ToDo!"
              />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>

          <div className="row justify-content-center" id="noTodosP">
            <div className="col-10">
              <p>No todos! Relax. :) </p>
            </div>
          </div>

          <ListItem />
          <ListItem />
          <ListItem />

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
