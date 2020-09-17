
 // custom properties

//  we can also add properties of our own
// Here we add the counter property to track the total calls count :

function sayHi(){
  console.log("Hi");

  // let's count hoe many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi();   // Hi
sayHi();   // Hi
console.log(`Called ${sayHi.counter} times`);  // called 2 times







/** */ console.log("-------------------------------------------");

function makeCounter(){
  // instead of :
  // let count = 0
  function counter(){
    return counter.count++;
  };
  counter.count = 0;
  return counter ;
}

let counter = makeCounter();
console.log(counter());     // 0
console.log(counter());    //1



/** */ console.log("-------------------------------------------");

function makeCounter2(){
  function counter2(){
    return counter2.count++;
  };

  counter2.count = 0;
  return counter2;
}

let counter3= makeCounter2();
counter3.count = 10;
console.log(counter3() ); // 10