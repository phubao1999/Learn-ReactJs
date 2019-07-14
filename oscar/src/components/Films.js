import React, { Component } from "react";
import { FilmsList } from "../data/films";
import { Link } from "react-router-dom";

const Films = props => {
  let films = FilmsList.map(person => {
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
      <div className="container">{films}</div>
    </div>
  );
};

export default Films;
