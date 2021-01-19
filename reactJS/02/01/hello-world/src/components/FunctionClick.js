import React from "react";

const FunctionClick = () => {

  function clickHandler(){
    console.log('Button Clicked');
    
  }

  return (
    <div>
      <hr/>
      <p>function Click</p>
      <button onClick={clickHandler}>FunctionClick</button>
    </div>
  );
};

export default FunctionClick;
