// global Symbol

/****** */ console.log("-------------01------------symbol.for------global symbol-------------------");


let id = Symbol.for("id");    // if the Symbol did not exist

let idAgain = Symbol.for("id");   // read it again ( maybe from another part of the code)

console.log(id === idAgain);      // true


// // ----while--
//  let id = Symbol("id");
//  let idd = Symbol("id");
//  console.log(id == idd);    // false





/** */ console.log("------------------02------- Symbol.keyFor----------");

// get symbol by name
 let sym1 = Symbol.for("name");
 let sym2 = Symbol.for("id");

 // get name by symbol

 console.log( Symbol.keyFor(sym1));      //name
 console.log(Symbol.keyFor(sym2));      // id 



