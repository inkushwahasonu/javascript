const os = require("os");

console.log(os.arch());
console.log(os.platform());
console.log(os.type());
console.log(os.homedir());
console.log(os.hostname());

console.log(os.totalmem());
let totalMemeory = os.totalmem();
console.log(`total : ${totalMemeory / 1024 / 1024 / 1024} GB`);

console.log(os.freemem());
let freeMemory = os.freemem();
console.log(`free : ${freeMemory / 1024 / 1024 / 1024} GB`);

console.log(os.networkInterfaces());
