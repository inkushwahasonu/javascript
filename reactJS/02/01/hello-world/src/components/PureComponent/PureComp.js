import React from "react";

class PureComp extends React.Component {
  render() {
    console.log('Pure Component Render');

    return (
      <div>
        <p>Pure Component{this.props.name}</p>
      </div>
    );
  }
}

export default PureComp;
