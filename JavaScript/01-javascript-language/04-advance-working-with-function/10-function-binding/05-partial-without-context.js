// going partial without context
// What if we’d like to fix some arguments, but not the context this? For example, for an object method.


function partial(func, ...argsBound){
  return function(...args) { // (*)
  return func.call(this, ...argsBound, ...args);
}
}

// Usage:
let user = {
  firstName : "john",
  say(time, phrase){
    console.log(`[${time}] ${this.firstName} : ${phrase}!`);
  }
};

// add a partial method with fixed time 
user.sayNow = partial(user.say, new Date().getHours() + ' : ' + new Date().getMinutes());

user.sayNow("hello");

// somthing like
// [10:00]  John : Hello! 