let user = {
  _name : "Guest",
  get name() {
    return this._name;
  }
};
let userProxy = new Proxy(user, {
  get(target, prop, receiver){
    return target[prop];
  }
});
console.log(userProxy.name);   // Guest

/*** */ console.log("----------------------------------------------");
let user2 = {
  _name :"Guests...",
  get name(){
    return this._name;
  }
};
let userProxy2 = new Proxy(user2, {
  get(target,prop, receiver){
    return target[prop];
  }
});
let admin2 ={
  __proto__:userProxy2,
  _name : "Admin"
};

// Expected : admin
console.log(admin2.name);     // Guests...



/*** */ console.log("----------------------------------------------");

let user3 = {
  _name : "Guest number",
  get name(){
    return this._name;
  }
};
let userProxy3 = new Proxy(user3, {
  get(target,prop,receiver){        // reciever = admin
    return Reflect.get(target, prop, receiver);
  }
});
let admin3 = {
  __proto__:userProxy3,
  _name:"Admin"
};
console.log(admin3.name);      // Admin