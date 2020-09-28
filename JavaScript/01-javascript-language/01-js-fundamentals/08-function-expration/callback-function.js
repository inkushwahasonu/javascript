const {createInterface} = require('readline');

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
 * callback
 * @param {string} answer s
 * @returns {void}
 */
function callback (answer) {
  console.log(`Hi ${answer}!`)
  readline.close()
}

readline.question(`What's your name?\t`, callback)

// /**
//  * 
//  * @param {string} question 
//  * @param {{answer: string}} callback 
//  */
// function question(question) {
//   // print question
//   // read answer
//   console.log(question);
//   const answer = "hello";
//   return answer;
// }
// const ans = question('work ?');
// callback(ans);





//-------------------------

// const { createInterface } = require("readline");
// const readline = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let createAge = (age) => {
// // use inner arrow function to get input and use it..
// // perform operation to use of input
// let message = 
//  (age < 18)  ? () => console.log("You are un-authorised user..") :
//  (age == 18) ? () => console.log("hello user..") :
//  (age > 18)  ? () => console.log("you are too agger..") :
//  console.log("Enter your correct age ...");
// message();

// readline.close();
// }
// readline.question(`What's your age ? : `, createAge);
