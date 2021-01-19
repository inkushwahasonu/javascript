import React from 'react';

const Person = ({name}) => {
  return ( 
    <div>
      <hr/>

      <h2>
        I am {name.name}, I am {name.age} years old I know {name.skill}
      </h2>
    </div>
   );
}
 
export default Person;