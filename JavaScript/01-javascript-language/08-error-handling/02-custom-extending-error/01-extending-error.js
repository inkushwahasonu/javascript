
// extanding error


class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test(){
  throw new ValidationError("Whoops!");
}

try{
  test();
} catch(err){
  console.log(err.message);  // Whoops!
  console.log(err.name);   // ValidationError
  console.log("---------------------------");

  console.log(err.stack);  // a list of nested calls with line numbers for each
  console.log("---------------------------");

}


/** */ console.log('----------------------------------------------------------');


class  ValidationError2 extends Error {
  constructor( message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if(!user.age) {
    throw new ValidationError2("No field : age");
  }
  if(!user.name){
    throw new ValidationError2("No field : name");
  }
  return user;
}

// Working example with try...catch

try{
  let user = readUser('{"age":25}');
} catch (err) {
  if (err instanceof ValidationError2){
    console.log("Invalid data : " + err.message); // Invalid data : Nofield : name
  } else if (err instanceof SyntaxError) { //
    console.log("JSON Syntax Error : " + err.message);
  } else {
    throw err;  // unknow error, rethrow it .
  }
}




