import React, { Component } from "react";

class Project extends Component {
  state = {};
  render() {
    return (
      <div id="project-row" className="row">
        <div className="col-9">
          <h2> NOME PROGETTO</h2>
        </div>
        <div className="col-3">
          <select class="form-control">
            <option selected>Progetto 1</option>
            <option>Progetto 2</option>
            <option>Progetto 3</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Project;
