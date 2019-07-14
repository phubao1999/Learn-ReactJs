import React, { Component } from "react";
import { ActorList } from "../data/actors";
import { Link } from "react-router-dom";

const Actors = props => {
  let actors = ActorList.map(person => {
    return (
      <div className="actor-container">
        <Link to={`/actors/${person.url}`}>
          <a>
            <div
              className="actor-img"
              style={{ backgroundImage: "url(" + person.img_src + ")" }}
            />
          </a>
          <h3 style={{ textDecoration: "none" }}>{person.name}</h3>
        </Link>
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
      <div className="container">{actors}</div>
    </div>
  );
};

export default Actors;
