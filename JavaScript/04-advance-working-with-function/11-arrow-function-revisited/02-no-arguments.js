// arrow function have no "arguments"

// That’s great for decorators, when we need to forward a call with the current this and arguments.

function defer(f, ms){
  return function (){
    setTimeout(() => f.apply(this, arguments), ms)
  };
}

function sayHi(who){
  console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 22000);
sayHiDeferred("John");   // Hello, John after 2 seconds