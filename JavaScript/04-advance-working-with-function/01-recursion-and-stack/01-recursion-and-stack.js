// Recursion and stack

// Two way of thinking
/*
 1. iterative thinking : the for loop
 2. recursive thinking : simplify the task and call self
*/

// 1. iterative thinking : the for loop

function pow(x, n){
  let result = 1;
  // multiply result by x n times in the loop
  for ( let i = 0; i < n; i++){
    result *=x;
  }
  return result;
}
console.log(pow(2, 3));      // 8


// 