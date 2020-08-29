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




