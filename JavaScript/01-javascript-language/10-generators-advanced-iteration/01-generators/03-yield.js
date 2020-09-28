
// "yield" is a two-way street

// it not only returns the result to the outside, but also can pass the value inside the generator.



function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2 = ? ";
  console.log(result);
}

let generator = gen();
let question = generator.next().value;     // <-- yield returns the value
generator.next(4);   // --> pass the result into the generator

/*** */console.log("------------------------------------------------");

function* gen2() {
  let ask1 = yield "2 + 2 = ?";
  console.log(ask1);   // 4
  let ask2 = yield "3 * 3 = ?";
  console.log(ask2);    // 9
}

let generator2 = gen2();
console.log(generator2.next().value);       //  "2 + 2 = ?"
console.log(generator2.next(4).value);      //  "3 * 3 = ?"
console.log(generator2.next(9).done);       //   true