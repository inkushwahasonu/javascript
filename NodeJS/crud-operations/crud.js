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

 // add some more data without over-riding in bio.txt
 fs.appendFileSync("sonu/bio.txt", "\nand append some another data in your CRUD.");

 // read datas of bio.txt without buffer 
 let read_data = fs.readFileSync("sonu/bio.txt","utf-8");        // utf-8 : for encripte
 console.log(read_data);


 // rename file name 
 fs.renameSync("sonu/bio.txt","sonu/myBio.txt");


 // delete file
 fs.unlinkSync("sonu/myBio.txt");

 // delete folder
 fs.rmdirSync("sonu");