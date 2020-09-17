// "var" tolerates redeclarations
/***** */ console.log("----------------01---------- 'var' tolerates redeclarations----------------------");

/**
 * let user;
 * let user ;    // SyntaxError : 'user has already been declared
 */

 var user = "Pete";
 var user = "John";    // this "var" does nothing ( already declared)  
 // ...it  dosen't trigger an error
 console.log(user);    // John



 /**** */ console.log("-------------------02-------- 'var' variables can be declared below their use ----------");
 // "var" variables can be declared below their use


 function sayHi(){
   phrase = "Hello";
   console.log(phrase);
   var phrase;
 }
 sayHi();




 /**** */ console.log("-------------------------------------------------------------------");

function sayHi2(){
  var phrase;
  phrase = "Hello";
  console.log(phrase);
}
sayHi2();



 /**** */ console.log("-------------------------------------------------------------------");

 function sayHi3(){
   phrase = "Hello"; // (*)
   if (false){
     var phrase;
   }
   console.log(phrase);
 }
 sayHi3();



  /**** */ console.log("-------------------------------------------------------------------");

  function sayHi4(){
    console.log(phrase);     // undefined
    var phrase = "Hello";
  }
  sayHi4();    

   /**** */ console.log("-------------------------------------------------------------------");
   

   function sayHi5 (){
     var phrase;       // declaration works at the start...
     console.log(phrase);  // undefined
     phrase = "Hello";     // ... assignment - when the exicution reaches it
   }
   sayHi5();