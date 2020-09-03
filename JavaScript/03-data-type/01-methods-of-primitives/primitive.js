//    methods of primitives

/**
 * There are 7 primitive types :
 * string
 * number
 * bigint
 * boolean
 * symbol
 * null
 * undefined
 */

/***** */ console.log("-------------------------01-----------METHODS OF PRIMITIVES-----------------------------------");

let sohan= {
  name : "sohan",
  age : 23,
  sayHi : function(){
    console.log("hello, " + this.name + ". you are " + this.age + " years old.");
  }
};
sohan.sayHi();



// a primitive as an object
/**
 * there are many things one would wnt to do with a primitive
 * there exist a string method ( str.toUpperCase() )  that returns a capitalized (str)
 */

 /**     */ console.log("----------------------------------02-------------primitive as an object-----------");

 /****  */console.log("(.toUpperCase())  ,  for example : console.log(string.toUpperCase())");

 let string = "Hello world";

 console.log(string.toUpperCase());     // Hello


 
