//  object destructing

let options = {
  title : "Menu",
  width : 100,
  height : 200
};

let {title, width, height} = options;

console.log(title);    // menu
console.log(width);   // 100
console.log(height);  // 200

/** */ console.log("---------------------------------------------------------");

let options2 = {
  title2 : "menu",
  width2 : 100,
  height2 : 200
};

// { sourceProperty : targetVariable}
let {width2 : w, height2 : h, title2}  =options2;

console.log(title2);  // menu
console.log(w);      // 100
console.log(h);      // 200

/** */ console.log("---------------------------------------------------------");
let option3 = {
  title3 : "Menu"
};
let { width3 = 100, height3 = 200, title3} = option3;

console.log(title3);  //  Menu
console.log(width3);  // 100
console.log(height3);  // 200

// /** */ console.log("---------------------------------------------------------");

// let option4 = {
//   title4 = "Menu"
// };

// let { width = prompt("width?"), title = prompt("title?")}= option4;
// alert (title);    // 
// alert (width);   // (whatever the result of prompt is)


/** */ console.log("---------------------------------------------------------");
 let option5 = {
 title5 : "Menu"
 };

 let {width5 : w5 = 100, height5 : h5 =200, title5} = option5;
 console.log(title5);    // menu
 console.log(w);         // 100
 console.log(h);         // 200

 /** */ console.log("---------------------------------------------------------");

 let option6  = {
   title6 : "Menu",
   width6 : 100,
   height6 : 200
 };

 // only extract title as a variable
 let { title6}  = option6;
 console.log(title6);   // menu




 // the rest pattern
  /** */ console.log("----------------------02------ the rest pattern-----------------------------------");


  let option7 = {
    title7 : "Menu",
    height7 : 200,
    width7 : 100
  };

  // title = property named title
  // rest = object width the rest of properties
  let {title7, ...rest} = options;

  // now title = "Menu", rest = {height : 200, width : 100}
  console.log(rest.height);    // 200
  console.log(rest.width);     // 100

//    /** */ console.log("---------------------------------------------------------");
// let title8, width8,height8;

// // error in this line

// { title8, width8, height8} = { title8 : "Menu", width8 : 200, height8 : 100 }




 /** */ console.log("---------------------------------------------------------");

{
  // a code block
  let message = " Hello";
  // ....

  console.log(message);
} 


 /** */ console.log("---------------------------------------------------------");

 let title9, width9, height9;
 
 // okay now
 ({title9, width9, height9} = {title9 : "menu", width9 : 200, height : 100});
 console.log(title9);  // menu