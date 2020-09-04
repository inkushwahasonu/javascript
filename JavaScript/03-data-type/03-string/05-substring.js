// searching for a substring

//  str.indexOf

let str = 'Widget with the id';
console.log(str.indexOf('Widget'));   /// 0 , because ' is found at the begnning
console.log(str.indexOf('widget'));   // -1  , not found, the search is case-sensitive
console.log(str.indexOf("with")); // 7  
console.log(str.indexOf("id")); // 1,     "id " is found at the position 1 (..idget with id)
console.log(str.indexOf('id',2)) //  16    second "id " string


console.log("----------------02---------------------------")

let str1 = 'as sly as a fox, as strong as an ox';
let target = 'as';    // let's look for it
let pos = 0;  
while (true) {
  let foundPos = str1.indexOf(target,pos );     // str.indexOf('as', 0);
  if (foundPos == -1) break;1
  console.log(`Found at ${foundPos}`);
  pos = foundPos + 1;

}

console.log("-------------------03------------------------")

let str2 = "as sly as fox , as strong as an ox";

let target2 = "as";
let pos2 = -1;
while((pos2 = str2.indexOf(target2, pos2 + 1)) != -1){
  console.log(pos2);

}



/** */ console.log("------------------------------------------");
let str4 = "Widget with id";

if ( str4.indexOf("Widget")){
  console.log("we found it");      // dosen't work
}

/** */ console.log("------------------------------------------");


let str5 = "Widget with id";

if ( str5.indexOf("Widget") != -1){
  console.log("we found it");
}