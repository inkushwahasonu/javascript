// nested function

// a function is called "nested" when it is created inside another function

/*

function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );
}

*/



function makeCounter(){
  let count = 0;
  return function(){
    return count++;
  };
}
let counter = makeCounter();

console.log(counter());    // 0
console.log(counter());   // 1
console.log(counter());   //2