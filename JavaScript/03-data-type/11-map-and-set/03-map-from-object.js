// object.entries : Map from object
/**** */ console.log("---------------------------01------------------------- Map from object---------------------");

let map = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1']
]);
console.log(map.get('1'));  // str1
console.log(map.get('num'));   // undefined
console.log(map.get(1));      // num 1
console.log(map.get(true));   // bool1



/**** */ console.log("------------------------------------------------------");

let obj = {
  name : "john",
  age : 30
};
let map2 = new Map(Object.entries(obj));
console.log(map2.get('name'));   // John



/**** */ console.log("---------------------------01------------------------- Object from map--------------------");
// only in html page
/**
  
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana : 1, orange : 2, meat : 4}
console.log(prices.orange) ; // 2
 */