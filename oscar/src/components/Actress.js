import React, { Component } from "react";
import { ActressList } from "../data/actress";
import { Link } from "react-router-dom";

const Actress = props => {
  let actress = ActressList.map(person => {
    return (
      <div className="actor-container">
        <a>
          <div
            className="actor-img"
            style={{ backgroundImage: "url(" + person.img_src + ")" }}
          />
        </a>
        <h3>{person.name}</h3>
      </div>
    );
  });
  return (
    <div className="name-content">
      <div>
        <Link className="back" to="/">
          Back
        </Link>
      </div>
      <h3 style={{ textAlign: "center" }}>{props.title}</h3>
      <div className="container">{actress}</div>
    </div>
  );
};

export default Actress;
