import React from "react";

const Props = (props) => {
  return (
    <div className="Props">
      <hr/><p>Props</p>
      <h1>Hello {props.name}</h1>
      <h4>your supper hero is {props.heroName}</h4>
    </div>
  );
};

export default Props;

// //------------- OR ------------------

// import React, { Component } from "react";

// class Props extends React.Component {
//   render(props) {
//     return (
//       <div className="Props">
//         <h1>
//           Hello {this.props.name} and and {this.props.name}
//         </h1>
//         <h4>your supper hero is {this.props.heroName}</h4>
//       </div>
//     );
//   }
// }

// export default Props;
