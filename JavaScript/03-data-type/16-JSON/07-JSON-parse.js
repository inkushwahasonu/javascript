// JSON.parse

// str   :  JSON-string to parse

// reviver  : Optional function(key,value) that will be called for each (key, value) pair and can transform the value.



// stringified array
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log(numbers[3]);       // 1



/***** */ console.log("----------------------------------------------------------");

let userData = '{"name": "Jhon", "age" : 35, "isAdmin" : false, "friends" : [0, 1, 2, 3]}';
let user = JSON.parse(userData);
console.log(user.friends[1]);     // 1

console.log(user.name);        // Jhon



/***** */ console.log("----------------------------------------------------------");

let json = `{
  name : "John",                      // mistake : property name without quotes
  "surname" : 'Smith',                // mistake : single quotes in value ( must be double)
  'isAdmin' : false                   // mistake : single quotes in key ( must be double)
  "birthday" : new Date(2000,2,3),    // mistake : no "new" is allowed, only bare values
  "friends" : [0,1,2,3]               // here all fine
}`;


