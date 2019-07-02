import React, { Component } from "react";

class Couter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 })
  }

  handleDown = () => {
    this.setState({ value: this.state.value - 1 })
  }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button 
          onClick={this.handleIncrement} 
          className="btn btn-secondary btn-sm"
        >
            Increment
        </button>
        <button
          onClick={this.handleDown}
          className="btn btn-warning btn-sm text-white m-3"
        >
            Down
        </button>
      </div>
    );
  }

  styles = {
    fontSize: "15px",
    fontWeight: "bold",
    color: "white"
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Couter;
