// the old var

// declaration on var
/**
 * let
 * const
 * var
 */

 var message =  "Hi";
console.log(message);    // Hi



/**** */ console.log("-------------------------------------------------------------------");

// "var" has no block scope

if (true){
  var test = true;   // use var instead of "let"
}
console.log(test);  // true,     the variable lives after if



/**** */ console.log("-------------------------------------------------------------------");

for (var i = 0; i<10; i++){
  var one = 1;
  //........
}

console.log(i);      // 10,    "i" is visible after loop, it's a global variable
console.log(one); // 1, "one" is visible  after loop, it's a global variable


/**** */ console.log("-------------------------------------------------------------------");

function sayHi(){
  if (true){
    var phrase ="Hello";
  }
  console.log(phrase);    // Hello     ,    works
}
sayHi();
/*  console.log(phrase); */     // Error : phrase is not defined ( Check the developer console)
