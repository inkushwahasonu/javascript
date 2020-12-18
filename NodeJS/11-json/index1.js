const fs = require("fs")

const biodata  = {
  name : "sonu kumar",
  age : 23,
  channel : "inkushwahasonu"
};

// convert in json data 
const jsonData = JSON.stringify(biodata);

// create a json file
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("json file created....");
  console.log(err);
})


// read the json file
fs.readFile("json1.json", "UTF-8", (err, data) => {
  console.log(data);
  const objData = JSON.parse(data);
  console.log(objData);
  console.log(objData.name);
})
