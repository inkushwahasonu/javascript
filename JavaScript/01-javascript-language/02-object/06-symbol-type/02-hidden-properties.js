// hidden properties
/******* */ console.log("------------01---- hidden properties-----");

let user = { 
  name : " rohan"

};
 let id = Symbol("id");
 user[id] = 1;
 console.log(user[id]);    // 1     we can access the data using the symbol as a key


//  /****** */ console.log("--------------------------------------");


// let user1 = {
//   name : " sohan"
// };

// user1.id = "Our id value";   // Our script uses " id " property
// user1.id = "id3Their id value";   // Another script also wants " id" for its purposes
// // overwritten by another script !



/****** */ console.log("--------02--------------------symbols are skiped by for...in------------------------------");


let id1 = Symbol("id");
let user3 = {
  name : " amit",
  age : 34,
  [id] : 123
};

for ( let key in user3) {
  console.log(key);

}
console.log("Direct : " + user3[id]);


/****** */ console.log("--------------------------------------");


let id2 = Symbol("id");
let user4 = {
  [id] : 1234
};
let clone = Object.assign({},user4);
console.log(clone[id]);

