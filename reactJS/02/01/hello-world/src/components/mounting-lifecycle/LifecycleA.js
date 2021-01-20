// Component Mounting Lifecycle Method

import React from "react";
import LifecycleB from './LifecycleB';

class LifecycleA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sonu",
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <hr/>
      <p>Component Mounting Lifecycle Method</p>
        <h1>Lifecycle A (Parrent component)</h1>
        <LifecycleB />
      </div>
    );
  }
}
export default LifecycleA;
