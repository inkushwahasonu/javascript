
// Borrowing from prototype

// in the chapter Decorators and forwarding, call/apply we talked about method borrowing. 

let obj = {
  0 : "Hello",
  1 : "world!",
  length : 2,
};
obj.join = Array.prototype.join;
console.log(obj.join(','));      // Hello, world!