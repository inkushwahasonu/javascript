
// error handling,  "try.. catch"



try{
  console.log('start of try runs');   
  // no error here
  console.log('end of try runs');
}catch(err){
  console.log('catch is ignored, because there are no errors'); 
}

/*** */console.log("--------2--------------------------------------------------");

try {
  console.log('start of try runs');
  lalala; // error , veriable is not defined
  console.log('end of try (never reached)');
} catch (err){
  console.log(`Error has occurred!`);
}


/*** */console.log("--------3--------------------------------------------------");

// syntax error
/*
try {
  {{{{{{{{{
}catch (e){
  console.log("The engin can't understand this code, it's invalid");
}
*/

/*** */console.log("--------4--------------------------------------------------");

try{
  setTimeout(function(){
    noSuchVariable;         // script will die here
  }, 1000);
}catch(e){
  console.log("won't work");
}




/*** */console.log("-------5---------------------------------------------------");

setTimeout(function(){
  try{
    noSochVariable; // try ...catch handles the error!
  }catch{
    console.log("error is caught here !");
  }
}, 1000);





