import React from "react";
import UpdatedComponent from "./withCounter";
class ClickCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <hr />
        <button onClick={incrementCount}>
          {this.props.name} Clicked {count} times
        </button>
      </div>
    );
  }
}
export default UpdatedComponent(ClickCounter, 5);
