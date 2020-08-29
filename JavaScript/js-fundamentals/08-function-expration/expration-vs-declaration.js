//function declaration vs function expration


/* --*/console.log("-------------function declaration--------------------");/*--------*/

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));


/* --*/console.log("------------function expration ---------------");/*----------------*/

let sub = function(a , b){
  return a - b;
}
console.log(sub(9 , 3));





/* --*/console.log("--------------function declaration -------------");/*----------------*/

let age = 17;


if (age < 18) {
  function welcome(){
    console.log("you are too short agger..");
  };
} else if (age = 18) {
 function welcome(){
   console.log("Hello User...");
 };
}else if (gae > 18){
 function welcome(){
   console.log("you are overage..");
 };
}else{
 function welcome(){
   console.log("you unauthorized person...");
 };
}
welcome();
 





/* --*/console.log("--------------------function expration ------------------");/*----------------*/

let user_age = 19;
let message;

if (user_age < 18) {
  message = function (){
    console.log("you are too short agger..");
  };
}else if (user_age > 18) {
  message = function (){
    console.log("you are over aged..");
  };
}else if (user_age == 18) {
  message = function (){
    console.log("Hello user");
  };
}

message();
