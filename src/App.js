import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/list";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
