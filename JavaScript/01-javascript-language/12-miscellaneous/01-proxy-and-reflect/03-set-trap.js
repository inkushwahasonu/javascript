
// validation with "set" trap

let numbers = [];
numbers = new Proxy(numbers, {
  set(target, prop, val) {    // to intercept property writing
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers.push(1); // added successfully
numbers.push(2); // added successfully
console.log("Length is : " + numbers.length);    // 2

numbers.push("test");   // TypeError ( 'set' on proxy returned false)
console.log("The line is never reached (error in the line above)");