import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import "./css/style.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Actors from "./components/Actors";
import Actress from "./components/Actress";
import Films from "./components/Films";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav title="Oscar2019" />
          <Route
            exact
            path="/"
            render={() => <Home title="Oscar Winners 2019" />}
          />
          <Route exact path="/actors/" render={() => <Actors />} />
          <Route exact path="/actress/" render={() => <Actress />} />
          <Route exact path="/films/" render={() => <Films />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
