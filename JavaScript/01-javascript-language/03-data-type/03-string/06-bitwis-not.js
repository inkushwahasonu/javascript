// In practice, that means a simple thing: for 32-bit integers ~n equals -(n+1).


console.log( ~2);     // -3 ,     the same as -(2+1)
console.log(~1);     // -2
console.log(~0);      // -1
console.log(~-1);     //0         ( -(-1+1))

let str = "Widget";
if (~str.indexOf("Widget")) {
  console.log('found it');         // work
}

// but
if (str.indexOf("Widget")) {
  console.log("We found it"); // doesn't work!
}
