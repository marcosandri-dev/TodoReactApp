import React, { Component } from "react";
import axios from "axios";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      value: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    //this.props.changeProject(this.state.value);
    console.log(this.state.value);
  };

  render() {
    return (
      <div id="project-row" className="row">
        <div className="col-9">
          <h2> NOME PROGETTO</h2>
        </div>
        <div className="col-3">
          <select
            className="form-control"
            name="value"
            value={this.state.value}
            onChange={this.onChange}
          >
            {this.props.projects.map(project => (
              <option key={project._id}>{project.name}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Project;
