// property existence test, "in" operator


//chech property in your function

/******* */ console.log("---chech property in your function-----");
let user = {}
console.log(user.noSuuchProperty === undefined);   // true





// chech property in your function
// "key" in object
/******* */ console.log("---'key' in object-----( ' property  / key ' in object )------------");


let user1 = { name : " John" , age : 30};
console.log("age" in user1);     // true





/**    */ console.log("----------------------");

let  obj = {
  text : undefined,
};
 console.log(obj.text);      // undefined
console.log("text" in obj);   // true
