function showName(){
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);

  // it's iterable
  // for (let arg of arguments) console.log(arg);

}

// show : 2, Julius, Caesar
showName("Julius", "Caeser");

// show : 1. illya, undefined(no second argument)
showName("Ilya");


/*** */ console.log("----------------------------------------");

function f(){
  let showArg = () => console.log(arguments[0]);
  showArg();
}
f(1);    // 1