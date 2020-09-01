// property value shorthand
// in real code we offen use existing variables as values for property name

/****** */console.log("------- property value shorthand----");

/**
 * 
 * @param {string} name 
 * @param {int} age 
 * @param {string} college 
 */



function soma( name, age, college){
  return{
    name : name,
    age : age,
    college : college,
  }
};

let mohan = soma("sonu", 34, "uci Collage");
console.log(mohan.college);

// property names limitations
/****** */console.log("------- Property names limitations----");

let rohan = {
  run : 2,
  viky : 3,
  returnee : 4,
};
 console.log(rohan.run * rohan.viky * rohan.returnee);      // 24




/////////////////////////////////////////
 /****** */console.log("------------");

let sona = {
  0 : "test"
};

console.log(sona[0]);     // test
console.log(sona["0"]);   // test