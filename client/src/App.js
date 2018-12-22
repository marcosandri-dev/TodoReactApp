import React, { Component } from "react";
import "./App.css";
import List from "./components/list";
import Header from "./components/header";
import Footer from "./components/footer";
import Project from "./components/project";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      selectedProj: ""
    };

    this.loadProjects = this.loadProjects.bind(this);
    this.changeProject = this.changeProject.bind(this);
    this.loadProjects();
  }

  loadProjects = function() {
    axios.get("http://localhost:8000/api/projects").then(res => {
      this.setState({ projects: res.data });
      this.setState({ selectedProj: res.data[0]._id });
    });
  };

  changeProject = function(proj) {
    this.setState({ selectedProj: proj });
    console.log(proj);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Project
            projects={this.state.projects}
            loadProjects={this.loadProjects}
            changeProject={this.changeProject}
          />
          <hr />
          <List selectedProj={this.state.selectedProj} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
