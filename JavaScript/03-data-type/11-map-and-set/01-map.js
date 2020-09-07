/**
 Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.

 */

 
let map = new Map();
map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a bolean key

// remember the regular Object? it would convert key to string
// map keeps the type, so these two different :
console.log(map.get(1)); // num1
console.log(map.get("1")); // str1
console.log(map.size); // 3

/**** */ console.log("-------------------------------------------------------");
let john = { name: "john" };
// for every user, let's store their visit count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john)); // 123

/**** */ console.log("-------------------------------------------------------");

let john2 = { name: "john" };

let visitsCountObj = {}; // try to use an object
visitsCountObj[john2] = 123; // try to use john object as the key

//that's what got written!
console.log(visitsCountObj["[object Object]"]); // 123
