import React from "react";
import Person from "./Person";

const NameList2 = () => {
  const persons = [
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

  const personList = persons.map((person) => <Person  name={person} />);

  return <div>{personList}</div>;
};

export default NameList2;
