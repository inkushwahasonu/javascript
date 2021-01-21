import React from "react";

class RegularComp extends React.Component {
  render() {
    console.log('Regular Component Render');

    return (
      <div>
        <p>Regular Component{this.props.name}</p>
      </div>
    );
  }
}

export default RegularComp;
