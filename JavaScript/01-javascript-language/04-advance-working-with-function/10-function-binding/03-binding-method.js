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
 * solution 1 : a wrapper
 * solution 2 : bind
 * 
 * 
 */




 // solution 2 : bind
// functions provide a built-in method bind that allows to fix this. 


let user4 = {
  firstName : "John"
};

function func(){
  console.log(this.firstName);        // connect "this" out side of function
}

let funcUser = func.bind(user4);
funcUser();  // John

// -----------------------------------------------------------------------------


let user5 = {
  firstName : "rohan"
};

function func(phrase){
  console.log(phrase + ' , ' + this.firstName)
}
// bind this to user
let funcUser2 = func.bind(user5);
funcUser2("Hello");             // Hello,John(argument " Hello") is passed, and this=user5


// now lets try with an object method
let user6 = {
  firstName : "Mohit",
  sayHi(){
    console.log(`Hello, ${this.firstName}!`);
  }
}

let sayHi = user6.sayHi.bind(user6);
sayHi();    // Hello Mohit


setTimeout(sayHi, 1000);  // Hello Mohit

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is refrence to the old object

user6 = {
  sayHi(){console.log("Another user in setTimeout!");}
};


// here we can be see that arguments are passed "as is ", only 'this' is fixed by bind:

let user7 = {
  firstName : "rishi",
  say(phrase){
    console.log(`${phrase}, ${this.firstName}!`);
  }
};

let say = user7.say.bind(user7);

say("Hello");    // Hello, rishi("helle" argument is passed to say)
say("Bye");    // Bye, rishi ( "Bye"  is passed to say)

