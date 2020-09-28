// Losing "this"

// here how it may happend with setTimeout
let user1 = {
  firstName :"John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user1.sayHi, 1000);   // Hello, undeined!


// -----------------------------------------------------------------------------
// there are two types of solution to , how to make sure that it will be called in the right contest
/**
 * solution 1 : a wrapper
 * solution 2 : bind
 */

