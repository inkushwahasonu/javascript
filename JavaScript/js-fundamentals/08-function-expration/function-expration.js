function sayHi(){
  console.log("Hello");
}

console.log(sayHi);        // function don't run (calling without paranthisis)


//'''''''''''''''''''''''''''
console.log(',,,,,,,,,,,,copy function to the veriable,,,,,,,,,,,,,,,,,,')
// ''''''''''''''''''''''''''
 

// we can copy function to another variable

function sayHii(){           // create function
  console.log("hello");
}
let func = sayHii;           // copy function to the variable

func();               // hello
sayHii();             //hello