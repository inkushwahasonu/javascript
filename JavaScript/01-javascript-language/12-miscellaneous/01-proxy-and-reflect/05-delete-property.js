// delete property 


let user4 = {
  name : "Jhon",
  _password : "secret"
};
console.log(user4._password);    /// secret

/**** */ console.log("------------------------------------------");

let user = {
  name : "John",
  _password : "***"
};
user = new Proxy(user, {
  get(target, prop){
    if (prop.startsWith('_')){
      throw new Error("Access denied");
    }
    let value = target[prop];
    return (typeof value === 'function') ? value.bind(target) : value;
  },
  set(target, prop,val) {          // to intercept property writing
    if(prop.startsWith('_')) {
      throw new Error("Access denied");
    }else{
      target[prop] = val;
      return true;
    }
  },

  deleteProperty(target, prop) {      // to intercept property deletion
    if (prop.startsWith('_')){
      throw new Error("Access denied");
    }else {
      delete target[prop];
      return true;
    }
  },
  ownKeys(target){        // to intercept property list
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

// "get"  doesn't allow to read _password
try{
  console.log(user._Password); //  Error : Access denied
}catch(e) {console.log(e.message);}

// "set" doesn't allow to write _password
try {
  user._password ="test";   // Error : Access denied
} catch(e) { console.log(e.message);}

// "deleteProperty" doesn't allow to delete _password
try{
  delete user._password ; // Error : Access denied
} catch(e) { console.log(e.message);}

// "ownKeys" filters out _password
for(let key in user) console.log(key);    // name