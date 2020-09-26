
// iteration with "ownKeys" and "getOwnPropertyDescriptor"

let user = {
  name : " Jhon",
  age : 30,
  _pasword : "***"
};
user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});


// "ownKeys" filters out _password
for (let key in user) console.log(key);   // name , then age

// same effect on these methods
console.log(Object.keys(user));   // name, age
console.log(Object.values(user));  // John, 30

/**** */ console.log("------------------------ 02------------------");


let user2 = {};
user2 = new Proxy(user2, {
  ownKeys(target) {
    return['a','b','c'];
  }
});
console.log(Object.keys(user2));    // <empty>


/**** */ console.log("-------------------- 03----------------------");

let user3 = {};
user3 = new Proxy(user3, {
  ownKeys(target){    // called once to get a list of properties
    return ['a', 'b', 'c'];
  },

  getOwnPropertyDescriptor(target, prop) {     // called for ever property
    return {
      enumerable : true,
      configurable : true
      /* .. other flags, probable " value :..." */
    };
  }
});

console.log(Object.keys(user3));    // a, b, c


