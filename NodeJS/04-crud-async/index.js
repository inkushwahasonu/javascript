const fs = require("fs");

/*

 // create a folder
 fs.mkdir("sonu",(err) => {
   console.log("folder created");
   console.log(` error : ${err}. `);
 })

 */

// create a file in any fiolder
fs.writeFile(
  "sonu/bio.txt",
  "This is CRUD operation in asynchronous file system in core module in nodeJS",
  (err) => {
    console.log("file is created and first message added.");
    console.log(`error : ${err}.`);
  }
);

// add some another messages in file without overriding
fs.appendFile(
  "sonu/bio.txt",
  "\nappend some another messages in CRUD operation in asynchronous file system in core module in node js.",
  (err) => {
    console.log("data added.");
    console.log(`error ${err}`);
  }
);

// read file data without bufferring
fs.readFile("sonu/bio.txt", "UTF-8", (err, data) => {
  console.log(data);
  console.log(`error : ${err}`);
});

// rename file
fs.rename("sonu/bio.txt", "sonu/mybio.txt", (err) => {
  console.log("file renamed...");
  console.log(err);
});

/*

// delete file
fs.unlink("sonu/mybio.txt", (err) => {
  console.log("file deleted...");
  console.log(`error : ${err}.`);
});

// delete folder
fs.rmdir("sonu", (err) => {
  console.log("folder deleted...");
  console.log(`error : ${err}`);
});

*/
