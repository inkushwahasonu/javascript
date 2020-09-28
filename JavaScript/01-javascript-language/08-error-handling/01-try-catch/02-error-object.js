
// error object

/**
 *  name     (error name. for instance, for an undefined variable that's "ReferenceError".)
 *  message   ( Textual message about error details.)
 * stack      current call stack : astring with information about the sequence of nested calls that led to the error
 */



 try{
   lalala;   // errror. variable is not defined!
 }catch(err){
   console.log(err.name); // RefrenceError
   console.log(err.message); // lalala is not defined at (... call stack)

   // can also show an error as a whole
   // the error is converted to string as "name : message"
   console.log(err);  // ReferenceError : lalala is not defined
 }



 /**** */ console.log("-------------------------------------------");

 let json = "{ bad json }";



 /*** */ console.log("--------optional catch binding using (try...catch) -------------");


 let json2 = '{"name" : "John", "age" : 30}';  // data from the server
 let user2 = JSON.parse(json2);    // convert the text representation to JS object

 // now user is an object with properties from the string
 console.log(user2.name);   // John
 console.log(user2.age);     // 30


 /*** */ console.log("------------------------------------------------------");

 let json3 = "{badd jason}";
 try{
   let user3 = JSON.parse(json3); // <---- when an error occurs........
   console.log(user3.name); // doesn't work

 }catch(e){
   // ...the execution jumps here
   console.log("Our apologies, the data has errors, we'll try to request it one more time.");
   console.log(e.name);
   console.log(e.message);
 }

 