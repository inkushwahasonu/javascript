// loops in array 
/** */ console.log("----------------------01--------------------- Loop-----------------------");



let arr = ["Apple", "Orange", "Pear"];
for (let i = 0; i<arr.length ; i++){
  console.log(arr[i]);  
}


/** */console.log("-------------02--------- for...of loop---------------------------");

for(let fruits of arr){
  console.log(fruits);
}



/** */console.log("--------  -03--------- for...in loop---------------------------");

for(let bestFruits in arr){
  console.log(arr[bestFruits]);
}
