// code blocks    {}

{
  // do some job with local variables that should not be seen outside

  let message = "Hello";   // only visible in thos blocks
  console.log(message);   // Hello
}
/*console.log(message);  */  // Error : message is not defined


/**** */ console.log("-----------------------------------------------------------------");

{
  // show message
  let message = "hello";
  console.log(message);  //  hello
}

{
  // show another message
  let message = "goodbe";
  console.log(message);      // goodbye
}

/**** */ console.log("-----------------------------------------------------------------");

// there'd be error without block


// show message 
let message = "hello";
console.log(message);

// show another message
/*
let messafe = "goodbye";    // error : variable already declared
console.log(message);
*/


/**** */ console.log("-----------------------------------------------------------------");
// for if, for, while and so on , variables declared in {...} are also only visible inside:

if (true) {
  let phrase = "Hello!";
  console.log(phrase);  // Hello!
}
/* console.log(phrase); */   // error : no such variable


/**** */ console.log("-----------------------------------------------------------------");

for (let i = 0; i < 3; i++){
  // the variable i is only visible inside this for
  console.log(i);     // 0, the 1, then 2
}

/*  console.log(i);  */     // erreor, no such variable
