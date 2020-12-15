const { createCipher } = require("crypto");
const fs = require("fs");


// create a file and write some message  in that file
fs.writeFile("read.txt","This is a asynchronous file system in core module in node js.", (err) => {
  console.log("file is created");
  console.log(err);
})

// add some more data in that file
 fs.appendFile("read.txt","\nappend/add some more data in asynchronous file system.", (err) => {
 console.log("data added..");
 console.log(err);
 })

 // read/print the file data
fs.readFile("read.txt","utf-8", (err,data) => {
  console.log(data);
  console.log(err);
})