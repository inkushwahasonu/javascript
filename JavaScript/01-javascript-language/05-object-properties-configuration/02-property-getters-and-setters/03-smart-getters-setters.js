
"use strict";

// Smatr getters/setters 
// gettres/setters can be used as wrappers over "real" property values to gain more control over operations with them. 

let user = {
  get name(){
    return this._name;
  },
  set name(value){
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
console.log(user.name);   // Pete

user.name = " ";         // Name is too short...