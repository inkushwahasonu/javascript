// garbage collection

// an important side effect in v8 (chrome, opera) is that such variable will become unavailable in debugging.


function f(){
  let value = Math.random();
  
  function g() {
    debugger;    // in console : type console.log(value); No such variable!
  }
  return g;
}

let g1 = f();
g1();




// console.log("------------------------------------------------------------------------------");

let value = " Surprise";
function f(){
  let value = " the closest value";
  function g(){
    debugger; // in console : type console.log(value);   Surprise!
  }
  return g;
}

let g2 = f();

g2();