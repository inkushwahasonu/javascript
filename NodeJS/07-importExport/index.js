
// // access for single function of any module
// const name = require('./operator');
// console.log(name);


// access for multiple function of any module
/*
const oper = require('./operator');
console.log(oper.add(5, 5));
console.log(oper.sub(10, 6));
*/

// or

const {add, sub} = require('./operator')
console.log(add(4, 5));
console.log(sub(9, 4));