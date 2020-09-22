
// Throwing our own errors
// what if json is syntactically correct, but doesn't have a required name property


let json = '{ "age" : 30 }';   // incomplite data
try{
  let user = JSON.parse(json);   // <-- no errors
  console.log(user.name);    // no name!

} catch(e) {
  console.log("doesn't execute");
}


/*** */ console.log("------------ 2 -----------------------------------------");
// throw operator
let error = new Error("Things happen o_O");
console.log(error.name); // Error
console.log(error.message);   //Things happen o_O


/*** */ console.log("------------ 3 -----------------------------------------");

let json2 = '{"age":30}';  // incomplete data

try{
  let user2 = JSON.parse(json2);   // <-- no errors

  if (!user2.name){
    throw new SyntaxError("Incomplete data : no name");   
  }
  console.log(user.name);
}catch(e){
  console.log("JSON Error : " + e.message);   // JSON Error : Incomplete data : no name
}