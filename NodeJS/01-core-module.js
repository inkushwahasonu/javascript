// core module with file system (fs) 
const fsys = require("fs");


// create a file (read.txt) and writre some message in that file
fsys.writeFileSync("read.txt","this is core module with file system.");

// over-ride the message in privious file (read.txt)
fsys.writeFileSync("read.txt","over-ride of file system this is testing of core module with file system.");

// add some another messages in privious file (read.txt)
fsys.appendFileSync('read.txt', '\nadd some message of file system  and this is a testing of core module with file system.');