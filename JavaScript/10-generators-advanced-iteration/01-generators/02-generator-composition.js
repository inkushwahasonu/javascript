
// generator composition
// generator composition is a spacial feature of generators that allows to transparently " embed" generators in each other


function* generateSequence(start,end){
  for(let i = start; i<=end; i++) yield i;
}
function* generatePasswordCode(){

  // 0...9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);
}

let str = '';
for (let code of generatePasswordCode()){
  str += String.fromCharCode(code);
}
console.log(str);      // 0..9A..Za..z




/*** */ console.log("------------------------------------------");

function* generateSequence2() {
  for ( let i = start; i <= end; i ++) yield i;
}
function* generateAlphaNum() {

  // yield* generaateSequence2(48, 57);
  for ( let i = 48; i <= 57; i++ ) yield i;

  // yield* generateSequence2(65, 90);
  for (let i =65; i<=90; i++) yield i;
  // yield* generateSequence2(97,122);
  for(let i = 97; i <= 122; i++) yield i;
}
let str2 = '';
for (let code of generateAlphaNum()){
  str2 +=String.fromCharCode(code);
}
console.log(str2);       // 0..9A..Za..z