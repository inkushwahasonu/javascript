
// the "new Function"  syntax


// syntax
// let func = new Function ([arg1, arg2, ...argN], functionBody);


let sum =  new Function('a', 'b', 'return a + b');
console.log(sum(1, 2));   // 3

/*** */ console.log("--------------------- syntax ---------------------------------------");


let sayHi = new Function('console.log("Hello")');
sayHi();   // Hello





/*** */ console.log("--------------------------- closure ---------------------------------");

/*

function getFunc(){
  let value = "test";
  let func = new Function('console.log(value)');
  return func;
}

   getFunc()() ;          // error : value is not defined

   */
//-------------------------------compair with the regular behavior--------------------------------------



function getFunc(){
  let value = "test";
  let func = function(){console.log(value);};
  return func;
}

getFunc()();     // test