import React, { Component } from "react";
import Particles from "react-particles-js";
import "./App.css";
import List from "./components/list";
import Header from "./components/header";
import Footer from "./components/footer/footer";
import Login from "./components/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "Login",
      listName: ""
    };
  }

  changeRoute = (route, listName) => {
    this.setState({ route: route, listName: listName });
  };

  render() {
    const { route } = this.state;
    return (
      <div className="App">
        <Particles style={{ position: "fixed", zIndex: -1 }} />
        <div className="container">
          <Header changeRoute={this.changeRoute} />
          <hr />
          {route === "Login" ? (
            <Login changeRoute={this.changeRoute} />
          ) : (
            <List
              changeRoute={this.changeRoute}
              listName={this.state.listName}
            />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
