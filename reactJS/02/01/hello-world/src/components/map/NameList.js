import React from "react";

export const NameList = () => {
  const names = ["Arun", "Santosh", "Daste"];
  //  const nameList = names.map((name, index)=> <h2 key={index}>{name}</h2>);{ // use of key props
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return <div>{nameList}</div>;
};
