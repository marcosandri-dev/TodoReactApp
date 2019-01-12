import React, { Component } from "react";
import "./App.css";
import List from "./components/list";
import Header from "./components/header";
import Footer from "./components/footer";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <hr />
          <List selectedProj={this.state.selectedProj} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
