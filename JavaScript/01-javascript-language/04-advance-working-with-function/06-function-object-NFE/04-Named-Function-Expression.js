
//   NFE   ( Named Function Expration  )


let  sayHi = function(who) {
  console.log(`Hello, ${who}`);
};

sayHi("Jhon");  // Hello, John






/*** */ console.log("------------------------------------------------------------");

let sayHiii = function func(who) {
  if (who){
    console.log(`Hello, ${who}`);
  }else {
    func("Guest");                // use func to re-call itself
  }
};

sayHiii();   // Hello, Guest

// But this won't work :
/* func();     */   // Error, func is not defined ( not visible outside of the function)


/*** */ console.log("------------------------------------------------------------");

/*

// the problem with that code is that  sayBye  may change in the outer code.

// if the function get assigned to  another variable insted, the code will start to give erros :
let sayBye = function func(who){
  if (who) {
    console.log(`Hello, ${who}`);
  }else{
    sayBye("Guest");    // Error : sayHi is not a function
}
};

let welcom = sayHi;
sayBye = null ;
welcome();        // Error, the nested sayBye call doesn't work any more!

*/




/*** */ console.log("------------------------------------------------------------");

let saySomething = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest") ;  // Not all fine  ( use func to re-call itself)
  }
};

let welcome = saySomething;
saySomething = null ;

welcome();     // Hello, Guest ( nested call works)


// Now it works, because the name "func" is function-local. 
// It is not taken from outside (and not visible there). 
// The specification guarantees that it will always reference the current function.