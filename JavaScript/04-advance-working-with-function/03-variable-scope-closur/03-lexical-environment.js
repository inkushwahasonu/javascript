
// for clarity , the explanation is split into multiple steps 

// Step 1. variables
/**
 * A “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”.
 */


    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 // step 2. function declarations
 /**
  * a function is also a value, like a variable.
  * 
  * the difference is that a function declaration is instantly fully intialized.
  */


     //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  // step 3. inner and outer lexical environment
  /**
   * when the code wants to access a variable- the inner lexical environment is searched first, then the outer one, then the more outer one and so on until the global one.
   */

   //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

   // step 4. returning a function
   /*
   function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
At the beginning of each makeCounter() call, a new Lexical Environment object is created, to store variables for this makeCounter run.


    */