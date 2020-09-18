// Borroing a method




/*
function hash(){
  console.log(arguments.join());    // Error : arguments.join is not a function
}
hash(1, 2);

*/


function hash2(){
  console.log([].join.call(arguments));   // 1,2
}
hash2(1, 2);       // 1,2