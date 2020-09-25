// generator.throw

/**
 * As we observed in the examples above, the outer code may pass a value into the generator, as the result of yield.
 * …But it can also initiate (throw) an error there. That’s natural, as an error is a kind of result.
 */

 function* gen() {
   try {
     let result = yield "2 + 2 = ?"   // 
     console.log(("the exicution does not reach here, because the "));
   }catch(e){
     console.log(e);   // shows the error  (Error: the answer is not found in my database)
   }
 }

 let generator = gen();
 let question = generator.next().value;
 generator.throw(new Error("the answer is not found in my database"));  


 /**8 */console.log("-------------------------------------------");

 function* generate2() {
   let result = yield " 2 + 2 = ?";    // error in this line
 }

 let generator2 = generate2();
 let question2 = generator2.next().value;

 try{
   generator2.throw(new Error("The answer is not found in my database"));
 }catch(e){
   console.log(e);        // Error: The answer is not found in my database
 }