const { createInterface } = require("readline");
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let createAge = (age) => {
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
readline.question(`What is your age ? : `, createAge);
