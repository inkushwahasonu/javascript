// as we already know, a function in JavaScript is a value.
// every value in javascript has a type. What type is a function?




// the "name" property

function sayHi(){
  console.log("Hi");
}
console.log(sayHi.name);    // sayHi


/** */ console.log("-------------------------------------------");

let sayHiiii = function(){
  console.log("Hi");
};
console.log(sayHiiii.name);  // sayHiiii   (there's a name!)

/** */ console.log("-------------------------------------------");

function f(sayHello = function(){}){
  console.log(sayHello.name);            // sayHi (works!)
}

f();

/** */ console.log("-------------------------------------------");
let user = {
  sayHiHi(){
    // .....
  },
  sayByeBye : function(){
    //.......
  }
}
console.log(user.sayHiHi.name);   // sayHiHi
console.log(user.sayByeBye.name);   // sayByeBye


/** */ console.log("-------------------------------------------");

// function created inside array
let arr = [function(){}];
console.log(arr[0].name);   // <empty string>
// the engine has no way to set up the right name, so there is nnone