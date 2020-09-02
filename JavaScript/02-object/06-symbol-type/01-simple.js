// symbol type 

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2);  /// false



/****** */ console.log("--------------------------------------");

// let id = Symbol("id");
// console.log(id);     // TypeError : Cannot convert a Symbol value to a string


let id3 = Symbol("id");
console.log(id3.description);   // id
/****** */ console.log("--------------------------------------");


