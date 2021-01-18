// functional component

import React from 'react';

export const Greet = () => {       // stateless functional component
  return ( 
    <h1 className='fc'>Functional component</h1>
   );
}

// export default Greet;


// JSX convert the code into
// return React.creactElement('h1',{className:'fc'},'Functional component' );