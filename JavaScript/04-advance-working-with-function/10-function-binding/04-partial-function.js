// Partial functions

// until now we have only been talking about binding 'this'. let's take it a step further.
// we can bind not only this , but also arguments. That's  realy done, but sometimes can be handy.

/*
the full syntax of bind

let bound = func.bind(context, [arg1], [arg2], ...);
*/



// tet's use bind to create a function double on its base:

function mul(a, b){
  return a * b;
}
let double = mul.bind(null, 2);
console.log(double(3));          //  = mul(2, 3) = 6
console.log(double(4));          // = mul(2, 4) = 8
console.log(double(5));          // = mul(2, 5) = 10


/*** */ console.log("-------------------------------------------------");

function mul2(a, b){
  return a * b;
}

let triple = mul2.bind(null, 3);

console.log(triple(3));       // = mul2(3, 3) = 9
console.log(triple(4));       // = mul2(3, 4) = 12
console.log(triple(5));       // = mul2(3, 5) = 15

