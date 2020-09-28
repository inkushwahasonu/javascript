// JSON.stringify
/*** */ console.log("-----------------------01---- JASON.stringify--------------------");
// JSON.stringify  :- to convert objects into JSON.
// JSON.parse    :- to convert JSON back in to object.



let student = {
  name : 'John',
  age :30,
  isAdmin : false,
  courses : ['html', 'css', 'js'],
  wife : null
};

let json = JSON.stringify(student);
console.log(typeof json);    // we've got a string!
console.log(json);

// JSON-encoded object :
/* 
{
"name" : "John",
"age " : 30,
"isAdmin" : false,
"courses ": ["html", "css", "js"],
"wife" : null
}
*/




/** */ console.log("----------------------------------------------------------------");

// JSON supports folloing data type
 /**
  * Objects{ ... }
  * Array [ ... ]
  * Primitives :- strings, numbers, boolean value true/false, null
  * 
  */



  // a number in JSON is just a number
  console.log( JSON.stringify(1))  // 1
   
  // a string in JSON is still a string, but double-quoted
  console.log( JSON.stringify('test')) // "test"
console.log(JSON.stringify(true));       // true
console.log(JSON.stringify([1,2,3]));    // [1, 2, 3]





/**** */ console.log("---------------------------------------------------------------");

// JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify
/// Namely
/**
 * Function properties(methods).
 * Symbilic properties.
 * Properties that store undefined.
 */

 let user = {
   sayHi() {      // ignored
  console.log("Hello");
},
[Symbol("id")]: 123,    // ignored
something : undefined    // ignored
 };

 console.log(JSON.stringify(user));      // {} (empty object)




 /** */ console.log("--------------------------------------------------------------------------")

 // The grate thing is that nested objects are supported and converted automatically


 let meetup = {
   title : "Conference",
   room : {
     number : 23, 
     participants : [ "john", "ann"]
   }
 };

 console.log(JSON.stringify(meetup));
 /* The whole structure is stringified : 
 {
  "title":"Conference",
  "room": {"number" :23, "participants": ["john", "ann"]},
 } 
  */






  /** */ console.log("--------------------------------------------------------------");

  // the important limitation : there must be no circular refrences.


  let room = {
    number : 23
  };
  let meetup2 = {
    title : "Conference",
    participants : ["john", "ann"]
  };

  meetup.place = room;       // meetup refrences room
  room.occupiedBy = meetup2;    // room refrences meetup
  JSON.stringify(meetup2);   /// Error : Converting circular structure to JSON
