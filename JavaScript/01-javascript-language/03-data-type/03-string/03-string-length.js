// string length

console.log(`my\n`.length); // 3



// accessing characters

let str = `hello`;
console.log(str[0]);             // h         the first character
console.log(str.charAt(0));    // h       first character

console.log(str[str.length - 1]);  // 0  last charecter

console.log(str[1000]);       // undefined

console.log(str.charAt(1000)); /// "  "  ( an empty message)
console.log("--------------------------------");

for(let char of "hello"){
  console.log(char);         // H,e,l,l,o
}



// strings are immutable
console.log("-----------------------------");


let str1 = 'hi';
str1[0] ='h';     // error
console.log( str1[0]);  // dosen't work


