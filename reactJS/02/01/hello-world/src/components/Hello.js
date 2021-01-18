import React, { createElement } from "react";

export const Hello = () => {
  // return(
  //   <div className="Home">
  //     <h1>Hello inkushwahasonu</h1>
  //   </div>
  // )

  return React.createElement(
    "div",
    { id: 'hello', className: 'Hello' },
    React.createElement("h1", null, "Hello inkushwahasonu")
  );
};
