
// Wrapping function : "apply"
// we can wrap a proxy around a function as well.


function delay(f, ms) {
  // return a wrapper that passes the call to after the timeoue
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(user){
  console.log(`Hello, ${user}!`);
}

// after this wrapping, calls to sayHi will be delayed for 3 seconds
sayHi = delay(sayHi, 3000);
sayHi("John");    // Hello, John!   (after 3 seconds)

/*** */ console.log("-----------------------------------------------");


function delay2(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi2(user) {
  console.log(`Hello, ${user}!`);
}
console.log(sayHi2.length);   // 1 (function length is the arguments count in its declaration)
sayHi2 = delay2(sayHi2, 3000);
console.log(sayHi2.length);     // 0(in the wrapper declaration, there are zero arguments)



/*** */ console.log("-----------------------------------------------");


function delay(f, ms){
  return new Proxy(f, {
    apply(target, thisArg, args){
      setTimeout(() => target.apply(thisArg, args), ms);
    }
  });
}
  function sayHi(user){
    console.log((`Hello, ${user}!`));
  }
  sayHi = delay(sayHi, 3000);
  console.log(sayHi.length);    // 1        (proxy forwards "get length" operation to the target)
 sayHi("John");   // Hello, john! (after 3 seconds)
