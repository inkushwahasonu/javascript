import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() =>props.greetHandler('child')}>Go to Parent</button>
      {/* <button onClick={props.greetHandler}>Go to Parent</button> */}
    </div>
  );
};

export default ChildComponent;
