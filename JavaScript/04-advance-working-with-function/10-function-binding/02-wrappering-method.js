/*
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
 * solution 1 : a wrappering
 * solution 2 : binding
 * 
 * 
 */


 // solution 1 :  a wrapper
 // the simplest solution is to use a wrapping function

 let user2 = {
  firstName : "John",
  sayHi(){
    console.log(`Hello,${this.firstName}!`);
  }
};
setTimeout(function(){
 user2.sayHi(); // Hello, John!
}, 1000);



// ------------------------------------------------------------ 
let user3  = {
 firstName: "John",
 sayHi(){
   console.log(`Hello, ${this.firstName}!`);
 }
};

setTimeout(() => user3.sayHi(), 1000);

//  ...the value of user changes within 1 second

user3 = {
 sayHi() { console.log("Another user in setTimeout!");}
};

// another user in setTimeout 





// -----------------------------------------------------------------------------


