// core module with file system (fs) 
const fsys = require("fs");


// create a file (read.txt) and writre some message in that file
fsys.writeFileSync("read.txt","this is core module with file system.");

// over-ride the message in privious file (read.txt)
fsys.writeFileSync("read.txt","over-ride of file system this is testing of core module with file system.");

// add some another messages in privious file (read.txt)
fsys.appendFileSync('read.txt', '\nadd some message of file system  and this is a testing of core module with file system.');

// read the data of previous file (read.txt)
let buf_data = fsys.readFileSync('read.txt');
// console.log(buf_data);                      to print file-data in buffer..
// <Buffer 6f 76 65 72 2d 72 69 64 65 20 6f 66 20 66 69 6c 65 20 73 79 73 74 65 6d 20 74 68 69 73 20 69 73 20 74 65 73 74 69 6e 67 20 6f 66 20 63 6f 72 65 20 6d ... >

/**
 * 
 * Node-js includes a aditional datatype called buffer.
 * (not available in browser's JavaScript)
 * buffer is mainly used to store binary data.
 * while reading from the file or receiving packets over the network .
 */


// print messages of file in string formate
 org_data = buf_data.toString();
console.log(org_data);

// rename the file (read.txt)

fsys.renameSync('read.txt','read-write.txt');