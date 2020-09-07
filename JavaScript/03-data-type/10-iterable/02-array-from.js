let arrayLike ={
  0 : "Hello",
  1 : "World",
  length : 2
};

let arr = Array.from(arrayLike);   // (*)
console.log(arr.pop());             // world methods



/** */ console.log("---------------------------------------------------");

let str = '𝒳😂';
// splits atr into array of characters
let chars = Array.from(str);
console.log(chars[0]);
console.log(chars[1]);
console.log(chars.length);     // 2

/** */ console.log("---------------------------------------------------");


let str2 = '𝒳😂';
let chars2 = [];    // Array.from internally does the same loop
for(let char of str2){
  chars2.push(char);
}
console.log(chars2);       // [ '𝒳', '😂' ]




/** */ console.log("---------------------------------------------------");
function slice(str, start, end){
  return Array.from(str).slice(start, end).join('');

}
let str3 = '𝒳😂𩷶';
console.log(slice(str,1,3));    // 😂𩷶
// the native method does not su pairpport surrogate
console.log(str.slice(1, 3));       // garbage ( two pices from defferent surrogate pairs)