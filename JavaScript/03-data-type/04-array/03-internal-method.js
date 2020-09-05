// internal methods
/**    */ console.log("---------------01--------internal method--------------------------");
// inserte or delete


let fruits = ["Banana"];
let arr = fruits;        // copy by refrence ( two variables refrence the same array)
console.log(arr);        // 'Banana'
console.log(arr == fruits); // true
arr.push("Pear");   // modifi the array by refrence
console.log(fruits);   // 'Banana' , 'Pear'