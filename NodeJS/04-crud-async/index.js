
 const fs = require("fs");
 

 // create a folder
 fs.mkdir("sonu",(err) => {
   console.log("folder created");
   console.log(` error : ${err}. `);
 })