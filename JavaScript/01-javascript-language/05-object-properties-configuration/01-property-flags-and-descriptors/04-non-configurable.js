
// property flags

// Object properties, besides a value, have three special attributes (so-called “flags”):
/**
 * writable – if true, the value can be changed, otherwise it’s read-only.
 * enumerable – if true, then listed in loops, otherwise not listed.
 * configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
 */


 // non-configurable

//  The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.

// A non-configurable property can not be deleted.





// here , 'Math'. in non-writable, non-enumerable and non-configurable :

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(JSON.stringify(descriptor, null, 2));

/*
{
  "value" : 3.141592653589793,
  "writable" :false,
  "enumerable" : false,
  "configurable" : false
}
*/



/**** */console.log("------------------------------------------------------");

// Math.PI = 3;    // Error
// delete Math.PI won't work either




/**** */console.log("------------------------------------------------------");

/*
Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.

To be precise, non-configurability imposes several restrictions on defineProperty:

Can’t change configurable flag.
Can’t change enumerable flag.
Can’t change writable: false to true (the other way round works).
Can’t change get/set for an accessor property (but can assign them if absent).

*/
// The idea of “configurable: false” is to prevent changes of property flags and its deletion, while allowing to change its value.



// Here user.name is non-configurable, but we can still change it (as it’s writable):
let user2 = {
  name : "John"
};

Object.defineProperty(user2, "name",{
  configurable : false
});


user2.name = "Pete" // work fine
delete user2.name    // error







/*** */ console.log("------------------------------------------------------------------");

// And here we make user.name a “forever sealed” constant:


/*

let user3 = {
  name : "Mohit"
};

Object.defineProperty(user3, "name", {
  writable : false,
  configurable :false
});

// won't be able to change user3.name or its flags
// all this won't work :

user2.name = "Pete";
delete user3.name;
Object.defineProperty(user3, "name", {value : "Nayak"});


*/