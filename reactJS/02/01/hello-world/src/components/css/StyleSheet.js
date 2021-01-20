import React from "react";
import "./myStyle.css";

const StyleSheet = (props) => {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <hr />
      <p>Style Sheet</p>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  );
};

export default StyleSheet;
