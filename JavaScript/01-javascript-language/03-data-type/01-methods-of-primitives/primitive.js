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
 * 
 * Note :- null / undefined have no methods
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

 /**     */ console.log("-----------------------------02-------------primitive as an object-----------");

 /****  */console.log("(.toUpperCase())  ,  for example : console.log(string.toUpperCase())");

 let string = "Hello world";

 console.log(string.toUpperCase());     // Hello


 
 /****  */console.log("(.toFixed(n))  ,  for example : console.log(number.toFixed(n))");

 let number = 23.43546787678690;
 console.log(number.toFixed(3));      // 23.435







 // constroctors String /Number / Boolean are for internal use only

  /**     */ console.log("-----------------------------03-------------constroctors String /Number / Boolean are for internal use only-----------");


  /*** */ console.log("--  typeof --");
 console.log(typeof 43);                //  number
  console.log(typeof new Number(23));     // object     because : objects are access with "new" keyword.
  console.log(typeof Number(0))             // number




  /**** */ console.log("---------------------------------------");

  let zero = new Number(0);
  if (zero){
    console.log("zero is truthy .");     // zero is truthy     because it's an object   
  }