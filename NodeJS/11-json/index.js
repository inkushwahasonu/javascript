const { lchmod } = require("fs");

const biodata = {
  name: "sonu",
  age: 23,
  channel: "inkushwahasonu",
};

console.log(biodata);
console.log(`\n`);

// convart object into json data
const jsonData = JSON.stringify(biodata);
console.log(jsonData);

console.log(`\n`);

// convert json data into object data

const objData = JSON.parse(jsonData);
console.log(objData);
