import React from "react";

class ClickCounterTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCountet = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <hr />
        <button onClick={this.incrementCountet}>Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounterTwo;
