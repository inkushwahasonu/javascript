// Method examples
/******/ console.log("------------------01----------------Method example---------------------------------");
let user = {
  name : "arun",
  age : 34
};
user.sayHi = function(){        // create a function with name user.sayHi
 console.log("hello");
}
user.sayHi();






// we could use the pre-declared function as method, like this
/******/ console.log("-------------------------------------------");

let user1 = {                   // create function

  // write any property
  
};

function sayHi(){             //   declare  function
  console.log("Hello !");
};

// add as a method
user1.sayHi  = sayHi;           // assign or copy the properties of sayHi in the method user.sayHi
user1.sayHi();                  // call function

console.log(user1);          //  { sayHi: [Function: sayHi] }
   


// method shorthand
/******/ console.log("--------------------02------------------method shorthand-----------------");
// both two methods are same
/******/ console.log("---both two methods are same--");

user2 = {
  sayHi2: function(){
    console.log("sonu");
  }
};
user2.sayHi2();                  // sonu

// same as this
/******/ console.log("-----------------------same as this--------------------");


user3 = {
  sayHi3(){
    console.log("sonu");
  }
};

user3.sayHi3();                  // sonu

