//  length  ( A word about "length")

let fruits = [];
console.log(fruits.length);
fruits[123] = "Apple";
console.log(fruits.length);   // 0 to 123 = 124 elements , will be there



/** */ console.log("-----------------------------------");

let arr =[1,2,3,4,5];
arr.length = 2;         // truncate to 2 elements
console.log(arr);     // 1,2

arr.length = 5;
console.log(arr[3]);  // undefined
console.log(arr);     // [ 1, 2, <3 empty items> ]


