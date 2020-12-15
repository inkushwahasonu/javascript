const fs = require("fs");


fs.writeFile("read.txt","This is a asynchronous file system in core module in node js.", (err) => {
  console.log("file is created");
})