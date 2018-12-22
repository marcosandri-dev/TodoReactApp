import React, { Component } from "react";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
      this.props.changeProject(this.state.value);
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
            onChange={this.handleChange}
          >
            {this.props.projects.map(project => (
              <option key={project._id} value={project._id}>
                {project.name}
              </option>
            ))}
            <option>Nuovo Progetto</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Project;
