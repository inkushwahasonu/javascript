let visitedSet = new WeakSet();
let john = {name : "john"};
let pete = { name : "pete"};
let mary = {name : "Mary"};

visitedSet.add(john);  // John visited us
visitedSet.add(pete);   // Pete
visitedSet.add(john);    // John

// visitedSet has 2 users now
// check if john visited?

console.log(visitedSet.has(john));   //true

//check if john visited?
console.log(visitedSet.has(mary));  // false

john = null;

// visitedSet will be cleaned automatically