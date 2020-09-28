
// further inheritance

class ValidationError extends Error {
  constructor (message) {
    super ( message);
    this.name = "ValidationError";
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property){
    super("No property : " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

// Usage
function readUser(json){
  let user = JSON.parse(json);
  if(!user.age){
    throw new PropertyRequiredError("age");
  }
  if(!user.name){
    throw new PropertyRequiredError("name");
  }
  return user;
}

// Working example with try...catch

try{
  let user = readUser('{"age" : 25}');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Invalid date : " + err.message);  // Invalid data : No property :
    console.log(err.name); // PropertyRequiredError
    console.log(err.property);   // name
  }else if (err instanceof SyntaxError) {
    console.log("JSON Syntax Error : " +err.message);
  }else {
    throw err ;  // unknown error, rethrow it
  }
}





/*** */ console.log("------------------------------------------------------------------------");

class MyError extends Error {
  constructor (message) {
    super(message);
    this.name = this.constructor.name;
  }
}
class ValidationError2 extends MyError {}

class PropertyRequiredError2 extends ValidationError2 {
  constructor (property) {
    super("No property : " + property);
    this.property = property;
  }
}

// name is correct
console.log(new PropertyRequiredError2("field").name);  //PropertyRequiredError

