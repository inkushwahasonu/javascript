"use strict";

// prototypal inheritance

let animal = {
  eats : true 
};
let rabbit = {
  jumps : true 
};

rabbit.__proto__ = animal;     // prototype ( object "animal" is inharited by object "rabbit".)

//-----------------------------------------------------------------------------------------------------


let animal2 = {
  eats : true,
  walk(){
    console.log("Animal walk");
  }
};

let rabbit2 = {
  jumps : true,
  __proto__:animal2 
};

// walk is taken from the prototype
rabbit2.walk();  /// Animal walk


/*** */ console.log("---------------------------------------------------");

let animal3 = {
  eats : true 
};

let rabbit3 = {
  jumps : true 
};

rabbit.__proto__ = animal;       // prototype ( object "animal" is inharited by object "rabbit".)

// we can find both properties in rabbits;

console.log(rabbit.eats);    // true
console.log(rabbit.jumps)    // true


/*** */ console.log("---------------------------------------------------");

let animal4 = {
  eats : true,
  walk(){
    console.log("Hollo Animal");
  }
};

let rabbit4 = {
  jumps : true,
  __proto__ : animal4
};

// walk is taken from the prototype
rabbit4.walk();    // HelloAnimal



/*** */ console.log("---------------------------------------------------");

// the prototype chain can be longar

let animal5 = {
  eats : true,
  walk(){
    console.log("chain inheritance");
  }
};

let rabbits5 = {
  jumps : true,
  __proto__ : animal5
};

let longEar = {
  earLength : 10,
  __proto__ : rabbits5
};

 longEar.walk();    // chain inheritance
console.log(longEar.jumps);     // true


/*** */ console.log("-----------02----- writing doesn't use prototype-------");
// writing doesn't use prototype
/**
 * the prototype is only used for reading properties.
 * write/delete operations work directly wuth the object.
 */


 let animal6 = {
   eats : true,
   walk(){
     /* this method won't be used by rabbit */
   }
 };

 let rabbit6 = {
   __proto__: animal6
 };

 rabbit.walk = function(){
  console.log("rabbit! Bounce-bounce!");
 };
rabbit.walk();     // rabbit! Bounce-bounce!



/*** */console.log("-------------------------------------------------------------");

let user = {
  name : "John",
  surname : "Smith",
  set fullName(value){
    [this.name, this.surname] = value.split(" ");
  },


    get fullName(){
      return `${this.name} ${this.surname}`;
    }
  }

  let admin = {
    __proto__ : user,
    isAdmin : true
  };

  console.log(admin.fullName);   // John Smith 

  // setter triggers!
  admin.fullName = "Alice Cooper"; 

  console.log(admin.fullName);   // Alice Cooper, state of admin modified
  console.log(user.fullName);   // John Smith, state of user protected