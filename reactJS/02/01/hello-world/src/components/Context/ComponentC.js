import React, { Component } from "react";
import ComponentE from "./ComponentE";

class ComponentC extends Component {
  render() {
    return (
      <div>
        <hr />
        <p>context</p>
        <ComponentE />
      </div>
    );
  }
}

export default ComponentC;
