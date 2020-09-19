
// property flags

// Object properties, besides a value, have three special attributes (so-called “flags”):
/**
 * writable – if true, the value can be changed, otherwise it’s read-only.
 * enumerable – if true, then listed in loops, otherwise not listed.
 * configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
 */


 // non writable
 // let's make user.name non writable(can't be reassigned) by changing writable flag :

 let user1 = {
   name : "Jhon"
 };
 Object.defineProperty(user1, "name", {
   writable : false
 });

 user1.name = "Pete";   // Error : Cannot assign to read only property 'name'




/***/console.log("-------------------------------------------------------------");

let user2 = {};

Object.defineProperty(user2, "name",{
  value : "Rohan",
  // for new properties we need to explicitly list what's true
  enumerable : true,
  configurable : true 
});

console.log(user2.name);   // John
user2.name = "mishra"      // Error
