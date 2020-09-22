

// rethrowing

let json = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(json); // <-- forgot to put "let" before user

  // ...
} catch(err) {
 console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (no JSON Error actually)
}

 /** */ console.log("------------------------------------------------------");


try {
  user2 = {/*-------*/};
}catch(err){
  if(err instanceof ReferenceError){
    console.log('ReferenceError');   // "ReferenceError" for accessing an undefined variable
  }
}
  



 /** */ console.log("------------------------------------------------------");

 let json3 = '{"age" : 30}';   // in complete data
 try{
   let user3 = JSON.parse(json3);
 
 if(!user3.name){
  throw new SyntaxError("Incomplete data : no name");
 }
 blabla();   // unexpected error
 console.log(user3.name);
} catch(e){
  if(e instanceof SyntaxError){
    console.log("JSON Error : " + e.message);
  }else {
    throw e; // rethrow
  }
}



 /** */ console.log("------------------------------------------------------");


 function readData(){
   let json = '{"age": 30}';

   try {
     //...
     blabla();  // error!
   } catch(e){
     // ...
     if(!(e instanceof SyntaxError)){
       throw e; // rethrow( don't know how to deal with it)
     }
   }
 }

 try{
   readData();
 }catch(e){
   console.log("External catch got : " + e);   // caught it!
   
 }