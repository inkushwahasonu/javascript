// add / remove array items
/**
 :- We already know methods that add and remove items from the beginning or the end:

arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.


but,
Here are a few  others.
*/

// splice method
/***** */ console.log("--------------------------01----------- splice() methods----------------------------------");


let arr = ["I" , "go" , "home"];
delete arr[1];   //  remove "go"

console.log(arr[1]);    // undefined

// now arr = ["I",  , "home"];
console.log(arr.length); // 3



/*** */ console.log("-----------------------------------------------------");
let arr1 = ["I", "study", " JAvascript", "rfgr", "sdada"];
arr1.splice(1, 3);   // from index 1 remove 3 element
console.log(arr1);    // 'I', ' JAvascript'



/*** */ console.log("-----------------------------------------------------");


let arr2 = ["I", "study", " JAvascript", "rfgr", "sdada"];
console.log(arr2);                   // 'I', 'study', ' JAvascript', 'rfgr', 'sdada' 
arr2.splice(0,3, "let`s", "dance");    //  from 0 remove 3 elements and replace them with another 
console.log(arr2);        //  'let`s', 'dance', 'rfgr', 'sdada' 


/*** */ console.log("-----------------------------------------------------");


let arr3 = ["I", "study", " JAvascript", "rfgr", "sdada"];
console.log(arr3);                   // 'I', 'study', ' JAvascript', 'rfgr', 'sdada' 
let removed = arr3.splice(0,3, "let`s", "dance");    //  from 0 remove 3 elements and replace them with another 
console.log(removed);      // [ 'I', 'study', ' JAvascript' ]
console.log(arr3);        //  'let`s', 'dance', 'rfgr', 'sdada' 
 
/*** */ console.log("-----------------------------------------------------");


/*** */ console.log("-----------------------------------------------------");


let arr4 = ["I", "study", " JAvascript", "rfgr", "sdada"];
/**
 * from index 2
 * remove 0 element
 * then insert "let`s", "dance"
 */
arr4.splice(2, 0, "let`s", "dance");   
console.log(arr4);        // [ 'I', 'study', 'let`s', 'dance', ' JAvascript', 'rfgr', 'sdada' ]
 




/*** */ console.log("-----------------------------------------------------");


let arr5 = [1,2,5];
/**
 * from index -1 (one stape from the end)
 * remove 0 element
 * then insert 3 & 4
 */
arr5.splice(-1, 0 , 3, 4);   
console.log(arr5);        // [ 1, 2, 3, 4, 5 ]
 





//    slice () methods
/***** */ console.log("--------------------------02----------- slice() methods----------------------------------");
// It returns a new array copying to it all items from index start to index end (not including end). 

let arr6 = ["t", "e", "s", "t"];
console.log(arr6.slice(1,3));    // e, s     (copy from 1 to 3)
console.log(arr6.slice(-2));      // s, t    (copy from -2 till the end)
console.log(arr6);              // [ 't', 'e', 's', 't' ]






// concat() methods
/***** */ console.log("--------------------------03----------- concat() methods----------------------------------");

let arr7 = [1,2];
console.log(arr7); 

//create an array from : arr7 and [3,4]
console.log(arr7.concat([3, 4]));       // [ 1, 2, 3, 4 ]

//create an array from : arr and [3,4] and [5,6]
console.log(arr7.concat([3,4], [5,6]))        // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr7.concat([3,4], 5, 6))        // [ 1, 2, 3, 4, 5, 6 ]



/*** */ console.log("-----------------------------------------------------");

let arr8 = [1, 2];
let arrayLike = {
  0 : "something", length : 1
};
console.log(arr8.concat(arrayLike));      // [ 1, 2, { '0': 'something', length: 1 } ]


/*** */ console.log("-----------------------------------------------------");
let arr9 = [1,2];
let arraysLike = {
  0 : "something" ,
  1 : "else",
  [Symbol.isConcatSpreadable]: true,
  length : 2
};
console.log(arr9.concat(arraysLike));        // [ 1, 2, 'something', 'else' ]

