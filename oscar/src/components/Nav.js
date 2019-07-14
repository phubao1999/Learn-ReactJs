import React, { Component } from "react";
import "../css/style.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <nav>
            <h2 className="logo">
              <a href="#" className="logo-link">
                Oscars 2019
              </a>
            </h2>
            <ul className="nav-menu">
              <li>
                <a href="#" className="nav-menu-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-menu-link">
                  Best Actor
                </a>
              </li>
              <li>
                <a href="#" className="nav-menu-link">
                  Best Actress
                </a>
              </li>
              <li>
                <a href="#" className="nav-menu-link">
                  Best Film
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
