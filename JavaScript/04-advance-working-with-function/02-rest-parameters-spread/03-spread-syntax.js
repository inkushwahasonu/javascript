// spread syntax 

console.log(Math.max(3,5,1));   // 5
/*** */ console.log("--------------------------------------------------------------------------");
let arr = [3,6,4,2];
console.log(Math.max(arr));   // NaN

/*** */ console.log("--------------------------------------------------------------------------");

let arr1 = [3,5,6,34,2,1];
let arr2 = [3,43,-3,34,4];
console.log(Math.max(...arr1, ...arr2));    // 43

/*** */ console.log("--------------------------------------------------------------------------");

let arr3 = [3,5,-3,5,6,7];
let arr4 = [4,5,7,2,34,5];
console.log(Math.max(1, ...arr3, 2, ...arr4, 234));    // 234

/*** */ console.log("--------------------------------------------------------------------------");

let arr5 =[3,5,7];
let arr6 = [3,2,5];
let merged = [0, ...arr5, 2, ...arr6];
console.log(merged);                      // [ 0, 3, 5, 7, 2, 3, 2, 5 ]

/*** */ console.log("--------------------------------------------------------------------------");

let str ="Hello";
console.log([...str]);    // [ 'H', 'e', 'l', 'l', 'o' ]

/*** */ console.log("--------------------------------------------------------------------------");

let str1 = "Hello";

// Array.from converts an iterable into an array
console.log(Array.from(str));  //  [ 'H', 'e', 'l', 'l', 'o' ]


// get a new copy of an array object

let arr7 = [1,2,3];
let arrCopy = [ ...arr7];   // spread the array into a list of parameter
                              // the put the result into a new array
  // do the array have the same contents?
  console.log(JSON.stringify(arr7) === JSON.stringify(arrCopy ));   // true

  // are the arrays equal ?
  console.log(arr7 === arrCopy); // false ( not same refrence)

  // modefying our initial array does not modify the copy :
  arr7.push(4);
  console.log(arr7);   // 1,2,3,4
  console.log(arrCopy);   // 1,2,3

/*** */ console.log("--------------------------------------------------------------------------");

// same thing to make a copy of an object

let obj = {a: 1, b:2, c: 3};
let objCopy = { ...obj};       // spread the object into a list of parameter
                               // then return the result in a new object
// do the objects have the same ocntents ?
console.log(JSON.stringify(obj) === JSON.stringify(objCopy));    // true
 
// are the objects equal?
console.log(obj === objCopy);  // false (not same refrence)

// modifying our initial object does not modify the copy
obj.d = 4;
console.log(JSON.stringify(obj));            // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy));       // {"a":1,"b":2,"c":3}