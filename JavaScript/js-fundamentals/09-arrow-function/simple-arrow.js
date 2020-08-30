// simple arrow function
/*-- ----- */ console.log(
  "---------Arrow function with parameter-------------"
);

let sum = (a, b) => a + b;

// This arrow function is very shorter than function declaration or function expration
// let sum = function(a, b){
//   return a + b;
// }

console.log(sum(3, 5));

/*-- ----- */ console.log(
  "--------Arrow function with parameter--------------"
);

let double = (n) => n ** 5;
console.log(double(4));

/*-- ----- */ console.log(
  "---------Arrow function without parameter-------------"
);

let sayHi = () => console.log("Hello User..");

sayHi();

/*-- ----- */ console.log(
  "---------Arrow function  --cheak permition-------------"
);

const { createInterface } = require("readline");
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let createAge = (age) => {
  // use inner arrow function to get input and use it..
  // perform operation to use of input
  let message =
    age < 18
      ? () => console.log("You are un-authorised user..")
      : age == 18
      ? () => console.log("hello user..")
      : age > 18
      ? () => console.log("you are too agger..")
      : console.log("Enter your correct age ...");
  message();

  readline.close();
};
readline.question(`What's your age ? : `, createAge);
