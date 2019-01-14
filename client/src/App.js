import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import List from "./components/list";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";

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
          <Route exact path="/" component={Login} />
          <Route path="/list/:listname" component={List} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
