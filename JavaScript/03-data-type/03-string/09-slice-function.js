// getting a substring

// str.slice(start [, end])


let str = "stringify";
console.log(str.slice(0,5));     // strin,      fron 0 to before 5'th character
console.log(str.slice(0,1));     // s




console.log("-------------------------------------------------------");

let str1 = "stringifying";
console.log(str1.slice(2));   // ringifying   ,    from the 2nd position till the end




console.log("-------------------------------------------------------");
// compair the functions substring and slice with same arguments

let str2 = "stringify";

console.log(str2.substring(2, 6));  // ring  ,  between 2 to before 6
console.log(str2.substring(6,2));   // ring   ,   between 2 to before 6


console.log(str2.slice(2, 6));       // ring           ,   start from 2 to befor 6
console.log(str2.slice(6, 2));      // " "  an empt   ,   start from 6 to before 2
