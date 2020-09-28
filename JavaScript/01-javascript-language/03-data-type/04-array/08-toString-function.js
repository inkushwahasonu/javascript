// toString function
/*** */ console.log("---------------------01---------------- toString function------------------------");

let arr = [1,2,3];
console.log(arr);   // 1,2,3
console.log(String(arr) === '1,2,3');    // true

/*** */ console.log("--------------------------------------------");

console.log([] +1);   // 1
console.log([1] + 1);  // 11
console.log([1, 2] + 1);  // 1,21



/*** */ console.log("--------------------------------------------");

console.log("" + 1);    // 1
console.log("1" + 1);    // 11
console.log("1,2" + 1);  // 1,21