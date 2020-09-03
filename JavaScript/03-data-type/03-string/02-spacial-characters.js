
/***** */ console.log("------------------02-------------spacial charector---------------------------");

/**

Character	   Description
\n	           =>     New line
\r	           =>     	Carriage return: not used alone. Windows text files use a combination of two characters \r\n to represent a line break.
\', \"	       =>     	Quotes
\\		         =>     Backslash
\t		         =>     Tab
\b, \f, \v		 =>     Backspace, Form Feed, Vertical Tab – kept for compatibility, not used nowadays.
\xXX		       =>     Unicode character with the given hexadecimal unicode XX, e.g. '\x7A' is the same as 'z'.
\uXXXX		     =>     A unicode symbol with the hex code XXXX in UTF-16 encoding, for instance \u00A9 – is a unicode for the copyright symbol ©. It must be exactly 4 hex digits.
\u{X…XXXXXX}	 =>      (1 to 6 hex characters)	A unicode symbol with the given UTF-32 encoding. Some rare characters are encoded with two unicode symbols, taking 4 bytes. This way we can insert long codes.

 */


let sound = "Guest : \n jodhs\n dsjhjs\n sdc";
console.log(sound);

let str1 = "Hello\nWorld";
let str2 = `Hello
World`;
console.log(str1 == str2);

console.log("\u00A9");      // symbol of copyright
console.log("\u{1F60D}");   // smiling face symbol


console.log('I\'m the Walrus!');  // I'm Walrus!
console.log(`I'm the Walrus !`);   // I'm the Walrus !
console.log(` The backslash : \\`);    // The backslash : \