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


// 2. recursive thinking : simplify the task and call self

function pow2(x, n){
  if( n== 1){
    return x;

  }
  else{
    return x * pow2(x, n -1);
  }
}
console.log(pow2(2, 3));       //8

/**
*If n == 1, then everything is trivial. It is called the base of recursion, because it immediately produces the obvious result: pow(x, 1) equals x.
*Otherwise, we can represent pow(x, n) as x * pow(x, n - 1). In maths, one would write xn = x * xn-1. This is called a recursive step: we transform the task into a simpler action (multiplication by x) and a simpler call of the same task (pow with lower n). Next steps simplify it further and further until n reaches 1.
*/