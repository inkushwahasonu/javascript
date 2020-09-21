// othger built-in prototype 
// function, array, date-number






let arr = [1, 2, 3];

// it inherits from Array.prototype
console.log(arr.__proto__ === Array.prototype); // true

// then from Object.prototype?
console.log(arr.__proto__.__proto__ === Object.prototype);  // true

// and null on the top.
console.log(arr.__proto__.__proto__.__proto__);   // null



/** */ console.log("-----------------------------------------------");
let arr2 = [1,2,3]
console.log(arr2);    // 1,2,3  <-- the result of Array.prototype.toString


/*** */ console.log("----------------------------------------------");

function f(){}
  console.log(f.__proto__ == Function.prototype);   // true
  console.log(f.__proto__.__proto__ == Object.prototype);  // true,  inherit from objects







  