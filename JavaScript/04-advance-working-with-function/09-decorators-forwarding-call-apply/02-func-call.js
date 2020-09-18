
// using "func.call" for the context
// the caching mentioned above is not suited to work with object methods.


// we'll make worker.slow caching
let worker = {
  someMethod(){
    return 1;
  },

  slow(x){
    //scary CPU-heavy task here
    console.log("called with " + x);
    return x * this.someMethod();  // (*)
  }
};

// same code as before
function cachingDecorator(func){
  let cache = new Map();
  return function(x){
    if (cache.has(x)){
      return cache.get(x);
    }
    let result = func(x);    // (**)
    cache.set(x, result);
    return result;
  };
}

console.log(worker.slow(1));           // the original method works

worker.slow = cachingDecorator(worker.slow);    // now make it caching
/* console.log(worker.slow(2));  */              // Whoops! Error : Can not read property 'someMethod' of undefined





/***** */ console.log("------------------------------------------------------------------");

function sayHi(){
  console.log(this.name);
}
let user2 = {name : "John"};
let admin = {name :"Admin"};

// use call to pass different objects as "this"
sayHi.call(user2);    // John
sayHi.call(admin);    // Admin


/***** */ console.log("------------------------------------------------------------------");

function say(phrase) {
  console.log(this.name + ' : ' + phrase);
}
let user3 = {name : "John"};

// user becomes this, and "Hello" Becomes the first argument
say.call(user3, "hello");   // John : Hello




/***** */ console.log("------------------------------------------------------------------");
let worker2 = {
  someMethod(){
    return 1;
  },
  slow(x){
    console.log("Called with " + x);
    return x * this .someMethod();    
  }
};

function cachingDecorator2(func){
  let cache = new Map();
  return function(x){
    if(cache.has(x)){
      return cache.get(x);
    }
    let result = func.call(this, x);        // "this" is passed correctly now
    cache.set(x, result);
    return result;
  };
}
worker2.slow = cachingDecorator2(worker2.slow);   // now make it caching
console.log(worker2.slow(2));    // works
console.log(worker2.slow(2));     // works, doesn't call the original (cached)
