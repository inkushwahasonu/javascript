// the exicution context and stack
/***
 Now let’s examine how recursive calls work. For that we’ll look under the hood of functions.

The information about the process of execution of a running function is stored in its execution context.

When a function makes a nested call, the following happens:

The current function is paused.
The execution context associated with it is remembered in a special data structure called execution context stack.
The nested call executes.
After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped.


 */

function pow(x, n){
  if(n == 1){
    return x;
  }else{
    return x * pow(x, n-1);
  }
}
console.log(pow(2,3));    // 8