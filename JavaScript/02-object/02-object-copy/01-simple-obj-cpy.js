

// copy object in any variable and modify it
/**** */ console.log("-------------------------------01---------------copy object in any variable and modify it-------------------")

let user = {
  name : "sohan",

};
let admin = user ;
console.log(user.name);     // sohan
admin.name = "mohan";
console.log(admin.name);    // mohan
console.log(user.name);     // mohan


// copy independent object in any variable
/**** */ console.log("--------------------------------02--------------copy independent object in any variable-------------------")

let a ={};
let b = a;
console.log(a == b);   /// true
console.log(a === b); // true


// compair two independent object 
/**** */ console.log("----------------------03--------------compair two independent object -------------------")
 let c = {};
 let d = {};
 console.log(c == b);   // false
 console.log(c === d);    // false



 

 

  

  