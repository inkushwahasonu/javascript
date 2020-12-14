/**
 * create a folder
 * create a file in that folder
 * write some message in that file
 * add more data in that file
 * read data without geting the buffer data at first (like file incoding).
 * rename the filename
 * delete the file and the folder.
 */

const fs = require("fs");

// create a folder named sonu
 //fs.mkdirSync("sonu"); 

 // create a file in sonu folder
 fs.writeFileSync("sonu/bio.txt", "this is a CRUD operation");