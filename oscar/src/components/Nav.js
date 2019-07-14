import React, { Component } from "react";
import "../css/style.css";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <nav>
            <h2 className="logo">
              <NavLink to="/" className="logo-link">
                {this.props.title}
              </NavLink>
            </h2>
            <ul className="nav-menu">
              <li>
                <NavLink exact to="/" className="nav-menu-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/actors" className="nav-menu-link">
                  Best Actor
                </NavLink>
              </li>
              <li>
                <NavLink to="/actress" className="nav-menu-link">
                  Best Actress
                </NavLink>
              </li>
              <li>
                <NavLink to="/films" className="nav-menu-link">
                  Best Film
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
