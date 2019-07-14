import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import "./css/style.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Actors from "./components/Actors";
import Actress from "./components/Actress";
import Films from "./components/Films";
import ActorsContainer from "./components/ActorContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav title="Oscar2019" />
          <Route exact path="/" render={() => <Home title="Oscar Winners" />} />
          <Route
            path="/actors/"
            render={() => <ActorsContainer title="Best Actors" />}
          />
          <Route
            path="/actress/"
            render={() => <Actress title="Best Actress" />}
          />
          <Route path="/films" render={() => <Films title="Best Films" />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
