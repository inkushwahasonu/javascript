// ignore elements using commas
/*** */ console.log("-----------------------------------01------------ignore elements using commas----------------------------");


// second & third element is not need  ( ignored by comma)
let [firstName, , ,title] = ["Julius", "Caeser", "Consul", "of the Roman Republic"];
console.log(title);   // of the Roman Republic




// assign to anything at the left-side
/*** */ console.log("-----------------------------------02------------ assign to anyhting at the left-side----------------------------");


// we can use any "assignables" at the left side

let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');
console.log(user.name);   // Ilya




// looping with entries
/**** */ console.log("-------------------------------03------------------------looping with entries-----------------------------");


let user2 = {
  name : "John",
  age : 23
};

// loop over keys-and-values
for(let[key, value] of Object.entries(user2)){
  console.log(`${key} : ${value}`);   // name : John, then age : 23
}


// same for a map:
/***** */ console.log("----------------------------…And the same for a map:-----------------------");

let user3 = new Map();
user3.set("name", "John");
user3.set("age", "30");
for(let[key, value] of user3){
  console.log(`${key} : ${value}`);  // name : John, then age : 30
}




// swap variables trick
/**** */console.log("------------------------------------04---------------swap variables trick---------------------------");

let guest = "Jane";
let admin = "Pete";

console.log(`${guest} ${admin}`);
// swap values : make guest = Pete, admin = Jane
[guest, admin] = [admin, guest];
console.log(`${guest} ${admin}`);   // pete Jane (successfully swapped!)




// ...rest
/**** */ console.log("---------------------------------------05----------(...rest)---------------------------");

let [name1, name2, ...rest] =["Julius", "Caeser", "Consul", " of the roman Republic"];
console.log(name1);  // Julius
console.log(name2);  // Caesar

console.log(rest[0]); // Consul
console.log(rest[1]);  // of the ROman REpublic
console.log(rest.length);  // 2





// default values
/**** */ console.log("---------------------------------------06----------(default values)---------------------------");

let [firstName1, surname1] = [];
console.log(firstName1);  // undefined
console.log(surname1);  // undefined

/** */ console.log("-------------------------------------------");
let [name = "guest", surname = "Anonymous"] = ["Julius"];

console.log(name);      // Julius   ( from array)
console.log(surname);   // Anonymous (default used)
/** */ console.log("-------------------------------------------");
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];
console.log(name);      // Julius ( from array)
console.log(surname);   // whataver prompt gets