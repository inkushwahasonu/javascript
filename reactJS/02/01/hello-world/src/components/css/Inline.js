// inline stylesheet

import React from "react";
const heading = {
  fontSize: "72px",
  color: "blue",
};

const Inline = () => {
  return (
    <div>
      <hr/>
      <p>inline class</p>
      <h2 style={heading}>Inline</h2>
    </div>
  );
};

export default Inline;
