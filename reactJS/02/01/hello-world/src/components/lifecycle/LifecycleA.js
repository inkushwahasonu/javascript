// Component Mounting Lifecycle Method

import React from "react";
import LifecycleB from "./LifecycleB";

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

  shouldComponentUpdate() {
    console.log("LifecycleA sholdComponentUpdate");
    return true;
  }

  getShanapshotforUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Codevolution",
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <hr />
        <p>Component Mounting Lifecycle Method</p>
        <h1>Lifecycle A (Parrent component)</h1>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}
export default LifecycleA;
