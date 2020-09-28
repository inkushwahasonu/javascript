
// property flags

// Object properties, besides a value, have three special attributes (so-called “flags”):
/**
 * writable – if true, the value can be changed, otherwise it’s read-only.
 * enumerable – if true, then listed in loops, otherwise not listed.
 * configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
 */


 // non-enumerable
 // now let's add a custom "toString" to user

 let user1 = {
   name : "John",
   toString() {
     return this.name;
   }
 };

 // By default , both our properties are listed :
 for ( let key in user1) console.log(key);        // name, toString




 /*** */ console.log("-------------------------------------------------------------");

 // If we don’t like it, then we can set enumerable:false. Then it won’t appear in a for..in loop, just like the built-in one:

 let user2 = {
   name : "John",
   toString() {
     return this.name;
   }
 };

 Object.defineProperty(user2, "toString", {
   enumerable : false
 });

 // now our toString disappears :
 for (let key in user2) console.log(key);      // name