// // access for single function of any module
// const name = require('./operator');
// console.log(name);

// access for multiple function of any module
/*
const oper = require('./operator');
console.log(oper.add1(5, 5));
console.log(oper.sub3(10, 6));
console.log(oper.mult2(3, 4));
*/

// or

const { add, sub, mult, name } = require("./operator");
console.log(add(4, 5));
console.log(sub(9, 4));
console.log(mult(3, 4));
console.log(name);
