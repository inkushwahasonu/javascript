//  searching in array

// indexOf method

/**** */ console.log("----------------------------01----indexOf methods--------------------");

let arr = [1, 0, false];
console.log(arr.indexOf(0));    // 1
console.log(arr.indexOf(false));  // 2
console.log(arr.indexOf(null));   // -1

console.log(arr.includes(1));  // true

/** */ console.log("----------------------------------------");

const arr1 = [NaN];
console.log(arr1.indexOf(NaN));   // -1     (should be 0, but === equality doesn't work for NaN)
console.log(arr1.includes(NaN));   // true




/**** */ console.log("----------------------------02----find and findIndex--------------------");


let users = [
  { id : 1, name : "sohan"},
  {id : 2, name : "rohit"},
  {id : 3, name : "Mary"}
];
let user = users.find(item => item.id == 1);
console.log(user.name);    // sohan
console.log(users.find(item => item.id == 2));
console.log(users.find(item => item.id == 3).name);




/** */ console.log("----------------------------------------");

let users1 = [
  { id : 1, name : "sumit"},
  {id : 2, name : "montu"},
  {id : 3, name : "rangila"}
];
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers.length);    // 2