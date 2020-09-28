// .codePoint() function

console.log("z".codePointAt(0));  // 122
console.log("Z".codePointAt(0));   //90


console.log(String.fromCodePoint(90));    //Z
console.log('\u005a');   // Z

let str = ' ';
for(let i = 65; i<= 220; i++){
  str += String.fromCodePoint(i);
}
console.log(str);
//ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
//¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ