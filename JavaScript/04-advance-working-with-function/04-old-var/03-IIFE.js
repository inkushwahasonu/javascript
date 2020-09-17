
// IIFE     “immediately-invoked function expressions"

/*
In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. 
What they did was called “immediately-invoked function expressions” (abbreviated as IIFE).

That’s not something we should use nowadays, but you can find them in old scripts.


*/
(function(){
  var message = "Hello";
  console.log(message);     // Hello
})();


/*** */ console.log("--------------------------------------------");


// tries to declare and immediatly call a function
/*

function(){     // <-- Error : function statements require a function name
    var message = "Hello";
    console.log(message);      
}();

*/



/*** */ console.log("--------------------------------------------");

// Syntax error because of parentheses below
/*
function go() {

}();    // <-- can't call function Declaration immediately

*/



/*** */ console.log("----------- way to create IIFE -----------------------");

// Way to create IIFE

(function(){
  console.log("Parentheses around the function");
})();

(function(){
  console.log("parentheses around the whole thing");
}());

!function(){
  console.log("Bitwise NOT operator starts the expression");
}();

+function(){
  console.log("Unary plus starts the expression");
}();