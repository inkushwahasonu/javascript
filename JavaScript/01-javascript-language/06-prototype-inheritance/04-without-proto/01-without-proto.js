
// prototype methds, objects without __proto__


// n the first chapter of this section, we mentioned that there are modern methods to setup a prototype.

// The __proto__ is considered outdated and somewhat deprecated (in browser-only part of the JavaScript standard).
 

// the modern method is
/***
 * Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
 * Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
 * Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.
 */



 let animal = {
   eats : true 
 };

 // create a new object with animal as a prototype
 let rabbit = Object.create(animal);
 console.log(rabbit.eats);   // true
console.log(Object.getPrototypeOf(rabbit) === animal);  // true
Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}



/*** */ console.log("---------------------------------------------------------------");


let animal2 = {
  eats : true 
};

let rabbit2 = Object.create(animal, { 
  jumps : {
    value : true 
  }
});

console.log(rabbit2.jumps);   // true
console.log(rabbit2.eats);  true