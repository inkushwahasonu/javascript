// Iteration over map
/**
 For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

 */

/**** */console.log("------------------------01----------Iteration over map----------------------");

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes',350],
  ['onion', 50]
]);
// iteration over key (vegetables)
for(let vegetable of recipeMap.keys()){
  console.log(vegetable);  // cucumber, tomatoes, onion
}

// iterate over values(amounts)
for (let amount of recipeMap.values()){
  console.log(amount);  // 500, 350, 50
}

// iterate over [key, values] entries
for (let entry of recipeMap){
  console.log(entry);
}
