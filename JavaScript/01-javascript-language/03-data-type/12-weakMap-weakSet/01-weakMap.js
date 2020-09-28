// weakMap


// Use case: caching

// 📁 cache.js
let cache = new Map();

// calculate and remember the result
function process(obj){
  if (!cache.has(obj)){
    let result = /*calculation of the result for */ obj;
    cache.set(obj, result);
  }
  return cache.get(obj);
}


// Now we use process() in another file:

// // 📁 main.js
let obj = {/* let's say we have an object */};
let result1 = process(obj);  // calculated
//... later, from another place of the  code ...
let result2 = process(obj);  // remembered result taken from cache


// ...later, when the object is not needed any more:
obj = null;
console.log(cache.size); // 1 (Ouch! The object is still in cache, takeing memory!)



// /*** */ console.log("-------------------------------------------------------------------------------");


// // // 📁 cache.js
// let cache2 = new WeakMap();

// // calculate and rember the result
// function process(obj){
//   if(!cache2.has(obj)){
//     let result3 = /* claculate the result for */ obj;
//     cache2.set(obj, result3);

//   }
//   return cache2.get(obj);
// }


// //// 📁 main.js
// let obj2 = {/*xome object */};
// let result5 = process(obj);
// let result6 = process(obj);

// // .. later, when the object is not needed any more:
// obj2 = null;

// // Can't get cache.size, as it's a WeakMap,
// // but it's 0 or soon be 0
// // When obj gets garbage collected, cached data will be removed as well