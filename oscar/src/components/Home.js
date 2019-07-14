import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="name-content">
        <div className="container">
          <h2>{this.props.title}</h2>
          <div className="home-image" />
          <div className="thumbnail-container">
            <div className="home-thumbnail-1" />
            <div className="home-thumbnail-2" />
            <div className="home-thumbnail-3" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
