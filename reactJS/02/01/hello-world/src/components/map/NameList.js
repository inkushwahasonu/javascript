import React from "react";

const NameList = () => {
  const person = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "Reace",
    },
    {
      id: 2,
      name: "Amit",
      age: 304,
      skill: "Reace2",
    },
    {
      id: 3,
      name: "chanki",
      age: 334,
      skill: "Reace3",
    },
    {
      id: 4,
      name: "fords",
      age: 435,
      skill: "Reace4",
    },
  ];

  let personList = person.map((person) => (
    <h1>
      I am {person.name} and I am {person.age} years old. but I Have{" "}
      {person.skill}
    </h1>
  ));

  return (
    <div>
      <hr />
      <p>map method (name List)....</p>
      {personList}
    </div>
  );
};

export default NameList;

//
// function NameList(){
//   const names = ['Bruce', 'krish', 'Ayana'];
//   const nameList = names.map(name => <h2>{name}</h2>);
//   return(
//     <div>
//       <hr/>
//       {nameList}
//     </div>
//   )
// }
