// rest parameter
/**
 * a function can be called with any number of arguments, no matter how it is defined.
 */
function sum(a, b) {
  return a + b;
}
console.log(sum(1,2,3,4,5,5));  // 3


//--------------------------- but
// to gather all arguments into array args:

function sumAll(...args){ // args is the name of the array
let sum2 = 0;
for (let arg of args) sum2 += arg;
return sum2 ;
}

console.log(sumAll(1));         // 1
console.log(sumAll(1, 2));         //  3
console.log(sumAll(1,2,3,4,5,6,));         // 21

/*** */ console.log("-----------------------------------------------------------------");

function showName(firstName, lastName,  ...titles){
  console.log(firstName + ' ' + lastName);   // julius caesar

  // the rest go into titles array
  // i.e. titles = ["consul", "imperator"]
  console.log(titles[0]);    // consul
  console.log(titles[1]);    // imperator
  console.log(titles.length);    //2
}
showName("julius","caesar", "consul","imperator");