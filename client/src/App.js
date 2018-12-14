import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/list";
import Header from "./components/header";
import Footer from "./components/footer";
import Project from "./components/project";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Project />
          <hr />
          <List />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
