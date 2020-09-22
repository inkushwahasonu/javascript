
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
   console.lalala(err);  // ReferenceError : lalala is not defined
 }

 