const path = require("path");


// print directory name / directory path of this file
console.log(path.dirname("/home/sonu/practices/javascript/NodeJS/06-path-module/path.js"));


// print extension of this file
console.log(path.extname("/home/sonu/practices/javascript/NodeJS/06-path-module/path.js"));

// print file name if this file
console.log(path.basename("/home/sonu/practices/javascript/NodeJS/06-path-module/path.js"));


// work with multiple function of path module
console.log(path.parse("/home/sonu/practices/javascript/NodeJS/06-path-module/path.js"));


// call a single property of parse() method
const myParse = path.parse("/home/sonu/practices/javascript/NodeJS/06-path-module/path.js");
console.log(myParse.name);
console.log(myParse.ext);
console.log(myParse.root);