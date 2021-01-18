import React, { Component } from "react";

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div className="State">
        <hr />
        <p>state</p>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}> Subscribe</button>
      </div>
    );
  }
}

export default State;
