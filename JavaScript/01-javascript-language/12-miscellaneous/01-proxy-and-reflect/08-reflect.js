
// reflect

// Reflect is a built-n object that simplifies creation of Proxy 

let user = {};
Reflect.set(user, 'name', 'John');
console.log(user.name);   // John


/** */console.log("---------------------------------");

let user2 = {
  name : "John",
};

user2 = new Proxy(user2, {
  get(target,prop,receiver){
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver);  
  },

  set(target, prop, val, receiver){
    console.log(`SET ${prop} = ${val}`);
    return Reflect.set(target, prop,val, receiver);
  }
});

let name2 = user2.name;    // shows "GET name"
user2.name = "Pete";      // shows "SETname = Pete"

/** */console.log("---------------------------------");
