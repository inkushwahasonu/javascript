
// Generators
// regular function returns only one single value or nothing but,
// Generators can return("yeld") multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.






// generator function

function* generateSequence(){
  yield 1;
  yield 2;
  return 3;
}

// "generator function " creates "generator object"
let generator = generateSequence();
console.log(generator);              // Object [Generator] {}


/*** */console.log("------------------------------------------------");

function* generateSequence2() {
  yield 1;
  yield 2;
  return 3;
}

let generator2 = generateSequence2();
let one2 = generator2.next();
console.log(JSON.stringify(one2));   // {"value":1,"done":false}



/**** */console.log("------ 02 --- generators are iterable-----------");
 /*
As you probably already guessed looking at the next() method, generators are iterable.

We can loop over their values using for..of:
 */

 
 function* generateSequence3(){
     yield 1;
     yield 2;
     return 3;
 }

 let generator3 = generateSequence3();
 for ( let value of generator){
   console.log(value);     //  1, then 2
 }


 /** */ console.log("----------------------------------------------------");

 function* generateSequence4(){
   yield 1;
   yield 2;
   yield 3;
   yield 4;
 }

 let generator4 = generateSequence4();

 for(let value4 of generator4){
   console.log(value4);          // 1, 2, 3, 4
 }



 /*** */console.log("------- all related functionality ----");
// As generatorsmaremiterable, we can call all related functionality

function* generateSequence5(){
  yield 1;
  yield 2;
  yield 3;
}

let sequence = [0, ...generateSequence5()];
console.log(sequence);       // 0, 1, 2, 3



/**** */console.log("------ 03 --- generators for iterable-----------");

let range = {
  from : 1,
  to : 5,

  // for..of range calls this method once in the vary beginning
  [Symbol.iterator]() {
    // ... it returns the iterator object :
    // onword, for...of work only with  that object, asking it for next values
    return {
      current : this.from,
      last : this.to,

      // next() is  called on each iteration by the for..of loop
      next() {

        // it should return the value as an object { done :..., value :...}
        if(this.current <= this.last) {
          return { done : false, value: this.current++};
        }else{
          return{done :true};
        }
      }
    };
  }
};

// iteration over range returns numbers from range. from to range.to
console.log([...range]);      // 1, 2, 3, 4, 5



 /** */ console.log("----------------------------------------------------");

 let range2 = {
   from: 1,
   to : 5,

   *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
    for  (let value = this .from; value <= this.to; value++){
      yield value;
    }
   }
 };

 console.log([...range2]);    // 1, 2, 3, 4, 5

