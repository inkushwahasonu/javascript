// internals , unicodes

console.log('𝒳'.length) ;    // 2 , MAthmatical script capital X
console.log('😂'.length);    // 2 ,  Face with tears of Joy
console.log('𩷶'.length);   // 2,   a rare Chinese hieroglyph




console.log('𝒳'[0]);    //  �  , strange symbol...
console.log('𝒳'[1]);    //  � ,  .... pieces of the surrogate pair


console.log("𝒳".charCodeAt(0).toString(16));  // d835   , between 0xd800 and 0xdbff
console.log('𝒳'.charCodeAt(1).toString(16));  // dcb3, between 0xdc00 and 0xdfff


console.log('S\u0307');        //   Ṡ      S + dot above 
console.log('S\u0307\u0323');  //  Ṩ     S + dot above + dot below

/***/console.log("-------------------------------------------------------------------------------------------");

let s1 = 'S\u0307\u0323';    // Ṩ, S + dot above + dot below
let s2 = 'S\u0323\u0307';   //  Ṩ, S + dot below + dot above
console.log(`s1 : ${s1}, s2 : ${s2}`);
console.log(s1 == s2);      // false    ,   though the characters look identical (?!)


/***/console.log("-------------------------------------------------------------------------------------------");

console.log("S\u0307\u0323".normalize() == "S\u0323\u0307".normalize());    // true


/***/console.log("-------------------------------------------------------------------------------------------");

console.log("S\u0307\u0323".normalize().length);   // 1
console.log("S\u0307\u0323".normalize() == "\u1e68");    // true
